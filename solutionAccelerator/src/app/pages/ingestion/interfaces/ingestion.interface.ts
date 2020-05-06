export interface IngestionFormInterface {
    name: string,
    code: string,
    disabled?: boolean
}

export interface IngestionRequestInterface {
    request_type: string,
    source?: string,
    data_type?: string,
    parameters?: object,
    run_id?: string
}

export interface AttributeInterface {
    defaultValue: string
    description: string
    errorMsg?: string
    label: string
    name: string
    regexp?: string
    type: string
    allowedValues?: []
}