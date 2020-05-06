import { trigger, transition, style, animate } from '@angular/animations';

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
    ]),
    // transition(':leave', [
    //     style(
    //         {
    //             transform: 'translateY(10px)',
    //             opacity: 0,
    //             visibility: 'hidden'
    //         }
    //     ),
    //     animate('0.1s  ease')
    // ])
])