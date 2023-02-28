import testimonialDataSet from '../data/testimonials.json'

(() => {
  function _createCard (avatar, name, title, company, quote) {
    const card = document.createElement('div')
    card.classList.add(...['why-remco-card', 'p-12', 'm-4', 'h-auto', 'max-w-[442px]', 'rounded-lg'])
    card.style.backgroundColor = 'var(--tertiary-color)'
    card.innerHTML =
    `<div class="flex flex-col mb-8">
      <img src="${avatar.url}" alt="${avatar.alt}" loading="lazy" class="img-fluid shadow-lg rounded-full">
      <div class="flex flex-col items-center justify-center pt-4">
        <span class="font-bold text-2xl">${name}</span>
        <span class="font-light text-xs">${title} @ ${company}</span>
      </div>
    </div>
    <p><em>"${quote}"</em></p>`
    return card
  }

  function _createdSet (array, hidden) {
    const div = document.createElement('div')
    div.classList.add(...['why-remco-card-set', 'flex', 'flex-col', 'xl:flex-row', 'justify-between', 'transition-all'])
    if (hidden) div.classList.add(...['scale-0', 'hidden'])
    array.forEach((item, index) => {
      if (index <= 3) div.append(_createCard(item.avatar, item.name, item.title, item.company, item.qoute))
    })
    document.querySelector('#testimonial-data-set').append(div)
  }

  _createdSet(testimonialDataSet.slice(0, 3), false)
  _createdSet(testimonialDataSet.slice(3), true)

  const _sets = document.querySelectorAll('.why-remco-card-set')
  console.log(_sets)
  const _btns = document.querySelectorAll('#why-remco button')
  let _current = 0

  function _move (dir) {
    _current += dir
    if (_current < 0) {
      _current = _sets.length - 1
    }

    if (_current === _sets.length) {
      _current = 0
    }

    _sets.forEach(item => {
      item.classList.add('scale-0')
      setTimeout(() => {
        item.classList.add('hidden')
      }, 150)
    })

    setTimeout(() => {
      _sets[_current].classList.remove('hidden')
      setTimeout(() => {
        _sets[_current].classList.remove('scale-0')
      }, 150)
    }, 150)
  }

  _btns[0].addEventListener('click', () => { _move(-1) })
  _btns[1].addEventListener('click', () => { _move(1) })
})()
