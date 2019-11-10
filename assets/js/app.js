(function (w, d) {

  // File custom
  const fieldFile = d.getElementById('attachment')
  const attachmentField = d.querySelector('.attachment-field')
  const textFileButton = attachmentField.querySelector('.nyx-button--text')
  fieldFile.addEventListener('change', function (e) {
    const files = e.target.files
    if (!files.length) return
    const btnText = files[0].name.substr(0, 18)
    textFileButton.innerHTML = files[0].name.length > 18 ? btnText + '...' : btnText
  }, true)
})(window, document)
