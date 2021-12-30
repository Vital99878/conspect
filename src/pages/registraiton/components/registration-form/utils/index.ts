export function requiredHandler(label: string) {
    if (!label.length) return { isRequired: label.length === 0, message: 'name required' }
    if (label.trim().length <= 8) return { isRequired: true, message: 'name need more then 8' }
    return { isRequired: false, message: 'name need more then 8' }
}

