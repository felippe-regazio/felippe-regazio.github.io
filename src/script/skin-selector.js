(function(){
  const _skinStorageKey = 'frcv-cv-skin';
  const _defaultSkin = document.body.dataset.skin;
  
  function setPageSkin(skin) {
    const $d = document;

    $d.body.dataset.skin = skin;
    $d.querySelector('[data-skin-pick].active').classList.remove('active');
    $d.querySelector(`[data-skin-pick="${skin}"]`).classList.add('active');

    localStorage.setItem(_skinStorageKey, skin);
  }

	document.querySelectorAll('[data-skin-pick]').forEach(skinPicker => {
		skinPicker.addEventListener('click', e => {
      setPageSkin(skinPicker.dataset.skinPick);
		});
  });
  
  setPageSkin(localStorage.getItem(_skinStorageKey) || _defaultSkin);
})();