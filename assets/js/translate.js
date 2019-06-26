// function googleTranslateElementInit() {
//     new google.translate.TranslateElement(
//         { pageLanguage: 'hi', layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT },
//         'google_translate_element'
//     )
// }
// function triggerHtmlEvent(element, eventName) {
//     var event
//     if (document.createEvent) {
//         event = document.createEvent('HTMLEvents')
//         event.initEvent(eventName, true, true)
//         element.dispatchEvent(event)
//     } else {
//         event = document.createEventObject()
//         event.eventType = eventName
//         element.fireEvent('on' + event.eventType, event)
//     }
// }

// const SelectLang = document.querySelector('#lang-select')
// const combo = document.querySelector('.goog-te-combo')
// SelectLang.addEventListener('change', e => {
//     combo.value = e.target.value
// })

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element')
}
