export default defineI18nConfig(() => {
    return {
        legacy: false,
        locale: 'de-DE',
        fallbackLocale: 'de-DE',
        modifiers: {
            snakeCase: (value: any) => String(value).split(' ').join('-')
        },
        missingWarn: true,
        fallbackWarn: true,
        warnHtmlMessage: false,
        silentFallbackWarn: false,
        silentTranslationWarn: false
    };
});