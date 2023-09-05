document.addEventListener('DOMContentLoaded', function () {
  const items = () => Array.from(document.querySelectorAll('section'))
  const addClassToCollection = (collection, klass, duration = 300) => setTimeout(() => {
    collection.shift().classList.add(klass)
    if (collection.length) {
      addClassToCollection(collection, klass, duration)
    }
  }, duration)
  const rmClassFromCollection = (collection, klass, duration = 300) => setTimeout(() => {
    collection.shift().classList.remove(klass)
    if (collection.length) {
      rmClassFromCollection(collection, klass, duration)
    }
  }, duration)
  addClassToCollection(items(), 'is-loading', 0)
  setTimeout(() => {
    rmClassFromCollection(items(), 'is-loading', 300)
    addClassToCollection(items(), 'is-loaded', 300)
  }, 2000)
})
