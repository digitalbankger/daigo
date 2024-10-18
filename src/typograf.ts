import Typograf from 'typograf';

Typograf.addRule({
    name: 'common/other/aposToQuot',
    handler: function (text) {
        return text.replace(/&apos;/g, "'");
    },
});

const typograf = new Typograf({ locale: ['ru', 'en-US'] });

typograf.enableRule(['common/nbsp/replaceNbsp', 'common/nbsp/afterNumber']);

// Вложенные кавычки тоже «ёлочки» для русской типографики
typograf.setSetting('common/punctuation/quote', 'ru', { left: '«', right: '»', removeDuplicateQuotes: true });

export const tp = (str: string) => typograf.execute(str);
