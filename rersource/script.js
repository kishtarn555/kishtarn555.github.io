let englishTranslations = {};
$(document).ready(function() {
    $.getJSON('/rersource/lang/en.json', function(translations) {
        englishTranslations = translations;
    });
    if (localStorage.getItem('preferredLanguage')) {
        changeLanguage(localStorage.getItem('preferredLanguage'));
    }
});

const languageButtons = {
    'en': 'English',
    'es': 'Español',
    'ja': '日本語'
};

function changeLanguage(lang) {
    $.getJSON('/rersource/lang/' + lang + '.json', function(translations) {
        $('[data-l18n-key]').each(function() {
            var key = $(this).data('l18n-key');
            $(this).text(translations[key] ?? englishTranslations[key] ?? $(this).text());
        });
        $('#langLabel').text(languageButtons[lang] || 'Language');
    });
    localStorage.setItem('preferredLanguage', lang);
}

$('[data-lang]').click(function() {
    var selectedLang = $(this).data('lang');
    changeLanguage(selectedLang);
});