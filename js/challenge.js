let timer = document.querySelector('#counter')
let seconds = timer.innerHTML
let likeList = document.querySelector('.likes')

const allButtons = document.querySelectorAll('button')
const incrementButton = document.getElementById('plus')
const decrementButton = document.getElementById('minus')
const likeButton = document.getElementById('heart')
const pauseButton = document.getElementById('pause')

const commentList = document.getElementById('list')
const commentForm = document.getElementById('comment-form')

// timer
let mainTimer = setInterval(function () {
  timer.innerHTML = seconds++
}, 1000)

// increment
incrementButton.addEventListener('click', function (e) {
  timer.innerHTML = seconds++
  e.preventDefault()
})

// decrement
decrementButton.addEventListener('click', function (e) {
  timer.innerHTML = seconds--
  e.preventDefault()
})

// like (WIP)
// As a user, I should see the count of the number of 'likes' associated with that number.
likeButton.addEventListener('click', function (e) {
  let likedTime = timer.innerText
  if (likeList.innerHTML.includes(likedTime)) {
    console.log(`I found ${likedTime} again`)
  } else {
    likeList.innerHTML += '<li>' + likedTime + '</li>'
  }
  e.preventDefault()
})

// pause
pauseButton.addEventListener('click', function (e) {
  clearInterval(mainTimer)
  allButtons.forEach((button) => {
    if (button.id === 'pause') {
      button.innerHTML = 'resume'
      button.id = 'resume'
      return
    } else {
      button.disabled = true
    }
  })
  resume()
  e.preventDefault()
})

// resume
function resume() {
  let resumeButton = document.getElementById('resume')
  resumeButton.addEventListener('click', function (e) {
    setInterval(function () {
      timer.innerHTML = seconds++
    }, 1000)
    allButtons.forEach((button) => {
      if (button.id === 'resume') {
        button.innerHTML = 'pause'
        button.id = 'pause'
        button.disabled = false
        return
      } else {
        button.disabled = false
      }
    })
    e.preventDefault()
  })
}

// comment
commentForm.addEventListener('submit', function (e) {
  let submittedComment = document.querySelector('#comment-input').value
  commentList.innerHTML += '<li>' + submittedComment + '</li>'
  e.preventDefault()
})
