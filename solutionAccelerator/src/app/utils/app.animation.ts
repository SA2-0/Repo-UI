import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';

export const ErrorTransition = trigger('ErrorTransition', [
    transition(':enter', [
        style(
            {
                transform: 'translateY(-10px)',
                opacity: 1,
                visibility: 'visible'
            }
        ),
        animate('0.3s  ease')
    ])
]);

export const SlideInTranstion = trigger('SlideInTranstion', [
    transition(':enter', [
        style(
            {
                transform: 'translateY(10px)',
                opacity: 1,
                visibility: 'visible'
            }
        ),
        animate('.5s  ease')
    ]),
    transition(':leave', [
        style(
            {
                transform: 'translateY(-10px)',
                opacity: 0,
                visibility: 'hidden'
            }
        ),
        animate('1s ease')
    ])
]);

// flow page transitions
export const flowTransitions = {
    ExitTranstion: trigger(
        'ExitTranstion', [
            transition(':leave', [
                query('.floating-cloud', stagger(150, [
                    style({ transform: 'translateY(100px)' }),
                    animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(0px)', opacity: 1 })),
                ]), { optional: true }),
            ])
        ]
    ),
    showNavButton: trigger('showNavButton', [
        // ...
        state('open', style({
            opacity: 1,
            visibility: 'visible'
        })),
        state('closed', style({
            opacity: 0,
            visibility: 'hidden'
        })),
        transition('open => closed', [
            animate('.25s')
        ]),
        transition('closed => open', [
            animate('.25s')
        ]),
    ]),
    EnterLeave: trigger('EnterLeave', [
        state('flyIn', style(
            {
                transform: 'translate3d(0, 0, 0)',
                opacity: 1,
                visibility: 'visible'
            }
        )),
        transition(':enter', [
            style(
                {
                    transform: 'translate3d(-10%, 0, 0)',
                    opacity: 0,
                    visibility: 'hidden'
                }
            ),
            animate('0.5s 300ms ease')
        ]),
        transition(':leave', [
            animate('0.3s ease', style(
                {
                    transform: 'translate3d(10%, 0, 0)',
                    opacity: 0,
                    visibility: 'hidden'
                }
            ))
        ])
    ])
}