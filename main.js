;(function () {
  var words = [
      'for Psychological Issues',
      'for Emotional Issues',
      'for Relationship Issues',
      'for Personal Issues',
    ],
    i = 0
  setInterval(function () {
    $('#changingword').fadeOut(function () {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn()
    })
  }, 3000)
})()

const lists = document.querySelectorAll('.m-show')
let showMenu = document.getElementById('test')
let clinicalMenu = `<div class="position-relative new-menu therapist-menu">
<div class="dropdown-item-navigationTitle">
  <p class="body_text_sm-_lineheight">
    <b>Clinical Therapy</b>
  </p>
</div>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/048-depression 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Depression</p>
    <p class="font_p_small">
      An elongated feeling of sadness which decreased pleasure in favourite
      activities and frequent fatigue.
    </p>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
    src="assets/icons/005-anxiety 1.png"

      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Anxiety</p>
    <p class="font_p_small">
      State of Arousal that occurs frequently causing racing heart and hampers
      ability to concentrate.
    </p>
  </div>
  <div class="show-on-hover card hq-card">
    <ul>
      <li class="d-flex my-2">
        <i>
          <img
            src="assets/icons/058-brain-2 1.png"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold" style="color:rgba(0,0,0,0.8)!important">Generalised Anxiety Disorder</p>
          <p class="font_p_small" style="font-weight:400;color:rgba(0,0,0,.8)!important">
            State Of Arousal that is evoked by general events in day to day
            life.
          </p>
        </div>
      </li>
      <li class="d-flex my-2">
        <i>
          <img
          src="assets/icons/004-anger 1.png"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold  text-dark"  style="color:rgba(0,0,0,0.8)!important">Panic Disorder</p>
          <p class="font_p_small" style="font-weight:400;color:rgba(0,0,0,.8)!important">
            State of panic that evokes a state of breathlessness, fear and
            stress all together.
          </p>
        </div>
      </li>
      <li class="d-flex my-2">
        <i>
          <img
          src="assets/icons/070-death 1.png"

            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold  text-dark"  style="color:rgba(0,0,0,0.8)!important">Phobias</p>
          <p class="font_p_small" style="font-weight:400;color:rgba(0,0,0,.8)!important">
            Struggling with Irrational fear, Get over your Phobias with us!
          </p>
        </div>
      </li>
      <li class="d-flex my-2">
        <i>
          <img
          src="assets/icons/028-schizophrenia 1.png"

            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold  text-dark"  style="color:rgba(0,0,0,0.8)!important">Social Anxiety</p>
          <p class="font_p_small" style="font-weight:400;color:rgba(0,0,0,.8)!important">
            Seek therapy If facing people or social gatherings give you nerve
            wrecking anxiety.
          </p>
        </div>
      </li>
    </ul>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/033-memory 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">PTSD</p>
    <p class="font_p_small">
      Stressful episodes that occur after a traumatic experience while
      hampering day to day activities.
    </p>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/052-bipolar-1 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Bipolar</p>
    <p class="font_p_small">
      Swinging between alternating episodes of depression and mania.
    </p>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/067-open-mind-1 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Obesessive Compulsive Disorder</p>
    <p class="font_p_small">
      Thoughts that you cannot stop, repetitive behavior you keep doing again
      and again.
    </p>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/anorexia 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Eating Disorders</p>
    <p class="font_p_small">
      Irregular eating patterns disturbing you? We can help!
    </p>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/026-vision 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Sleep Disorders</p>
    <p class="font_p_small">
      Look closely as to what is disturbing your sleep.
    </p>
  </div>
</a>
</div>
`
let behaviorMenu = `<div class="position-relative new-menu behaviour-menu">
<div class="dropdown-item-navigationTitle">
  <p class="body_text_sm-_lineheight">
    <b>Behavioural Therapy</b>
  </p>
</div>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/099-strenght 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Anger Issues</p>
    <p class="font_p_small">
      Anger Outbursts making your life difficult? We can Help!
    </p>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/063-strategy-1 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Addiction </p>
    <p class="font_p_small">
      Addiction is a psychological and physical inability to stop a habit .
    </p>
  </div>
  <div class="show-on-hover card hq-card">
    <ul>
    <li class="d-flex">
    <i>
      <img
        src="assets/icons/no-drugs (1) 1.png"
        width="25"
        height="25"
      />
    </i>
    <div class="d-flex flex-column">
      <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">Substance</p>
      <p class="font_p_small" style="font-weight:400; color:rgba(0,0,0,.8)!important">
      Inability to stop substance use
      </p>
    </div>
  </li>
  <li class="d-flex">
  <i>
    <img
      src="assets/icons/whiskey 1.png"
      width="25"
      height="25"
    />
  </i>
  <div class="d-flex flex-column">
    <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">Alcohol</p>
    <p class="font_p_small" style="font-weight:400; color:rgba(0,0,0,.8)!important">
    Inability to control your use of alcohol
    </p>
  </div>
</li>
<li class="d-flex">
<i>
  <img
    src="assets/icons/quit-smoking 1.png"
    width="25"
    height="25"
  />
</i>
<div class="d-flex flex-column">
  <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">Smoking</p>
  <p class="font_p_small" style="font-weight:400; color:rgba(0,0,0,.8)!important">
  Inability to stop using nicotine.
  </p>
</div>
</li>
<li class="d-flex">
<i>
  <img
    src="assets/icons/comunications 1.png"
    width="25"
    height="25"
  />
</i>
<div class="d-flex flex-column">
  <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">
  Internet & Mobile, Video Games </p>
  <p class="font_p_small" style="font-weight:400; color:rgba(0,0,0,.8)!important">
  Inability to stop using nicotine.
  </p>
</div>
</li>
<li class="d-flex">
<i>
  <img
    src="assets/icons/poker-chip 1.png"
    width="25"
    height="25"
  />
</i>
<div class="d-flex flex-column">
  <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">
  Gambling </p>
  <p class="font_p_small" style="font-weight:400; color:rgba(0,0,0,.8)!important">
  Maladaptive patterns of gambling behavior
  </p>
</div>
</li>
<li class="d-flex">
<i>
  <img
    src="assets/icons/sex-addict 1.png"
    width="25"
    height="25"
  />
</i>
<div class="d-flex flex-column">
  <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">
  Sexual</p>
  <p class="font_p_small" style="font-weight:400; color:rgba(0,0,0,.8)!important">
  Cumpulsive engagement in sexual activity, despite negative consequences.
  </p>
</div>
</li>
    </ul>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/051-bipolar 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Behavioural Disorders </p>
    <p class="font_p_small">
      Characterized by patterns of disruptive behvaiour.
    </p>
  </div>
  <div class="show-on-hover card hq-card">
    <ul>
      <li class="d-flex my-2">
        <i>
          <img
            src="assets/icons/027-open-mind 1.png"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">Impulse control disorders</p>
          <p class="font_p_small" style="font-weight:400; color:rgba(0,0,0,.8)!important">
            Inability to resist an urge to carrry out an implusive act.
          </p>
        </div>
      </li>
      <li class="d-flex my-2">
        <i>
          <img
            src="assets/icons/061-learning 1.png"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">Adult ADHD</p>
          <p class="font_p_small" style="font-weight:400;color:rgba(0,0,0,.8)!important">
            Persistent difficulty in paying atention, and controlling
            hyperactive and impulsive behaviour.
          </p>
        </div>
      </li>
    </ul>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/stress 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Stress</p>
    <p class="font_p_small">
      Overcome Stressful Circumstances in any Aspect of your life
    </p>
  </div>
  <div class="show-on-hover card hq-card">
    <ul>
    <li class="d-flex">
    <i>
      <img
        src="assets/icons/072-exhausted-1 1.png"
        width="25"
        height="25"
      />
    </i>
    <div class="d-flex flex-column">
      <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">Personal Stress</p>
      <p class="font_p_small" style="font-weight:400;color:rgba(0,0,0,.8)!important">
      Personal situations that are tough to handle
      </p>
    </div>
  </li>
  <li class="d-flex">
  <i>
    <img
      src="assets/icons/053-folder 1.png"
      width="25"
      height="25"
    />
  </i>
  <div class="d-flex flex-column">
    <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">Workplace Stress</p>
    <p class="font_p_small" style="font-weight:400;color:rgba(0,0,0,.8)!important">
    Workplace issues hindering normal life functioning
    </p>
  </div>
</li>
<li class="d-flex">
<i>
  <img
    src="assets/icons/062-conflict 1.png"
    width="25"
    height="25"
  />
</i>
<div class="d-flex flex-column">
  <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">Relationship Stress</p>
  <p class="font_p_small" style="font-weight:400;color:rgba(0,0,0,.8)!important">
  Relationship issues going over-board
  </p>
</div>
</li>
    </ul>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/096-target-1 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Sexual Disorders</p>
    <p class="font_p_small">Disturbances in sexual desires and responses.</p>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/039-inspiration 2.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Others</p>
    <p class="font_p_small">
      Get Online Counselling for managing time and overcoming procrastination
      and improve faulty behvaiours
    </p>
  </div>
  <div class="show-on-hover card hq-card left-side">
    <ul>
      <li class="d-flex">
        <i>
          <img
            src="assets/icons/031-stopclock 1.png"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">Procastination</p>
          <p class="font_p_small" style="font-weight:400;color:rgba(0,0,0,.8)!important">
            Inability to start working due to lack of motivation.
          </p>
        </div>
      </li>
      <li class="d-flex">
        <i>
          <img
            src="assets/icons/025-alarm-clock 1.png"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">Time Management</p>
          <p class="font_p_small" style="font-weight:400;color:rgba(0,0,0,.8)!important">
            Manage your time efficiently.
          </p>
        </div>
      </li>
      <li class="d-flex">
        <i>
          <img
            src="assets/icons/055-dreaming-1 1.png"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">Self harm & Suicidal Behaviour </p>
          <p class="font_p_small" style="font-weight:400;color:rgba(0,0,0,.8)!important">
            Control behaviour or thoughts involving pain or injury to oneself.
          </p>
        </div>
      </li>
    </ul>
  </div>
</a>
</div>
`
let relationshipMenu = `<div class="position-relative new-menu relationship-menu">
<div class="dropdown-item-navigationTitle">
  <p class="body_text_sm-_lineheight">
    <b>Relationship Issues</b>
  </p>
</div>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/054-in-love-1 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Couple Therapy</p>
    <p class="font_p_small">Issues between partners. We can Help!</p>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/074-broken-heart-1 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Break Up</p>
    <p class="font_p_small">
      Break ups can be hard to handle, dont feel devastated and seeks help
      from an expert.
    </p>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/family 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Parenting Issues</p>
    <p class="font_p_small">
      Find out all you need to overcome the parenting struggles.
    </p>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/030-dead 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Violence & Abuse</p>
    <p class="font_p_small">
      Any form of abuse can be disturbing, discuss your concerns with an
      expert
    </p>
  </div>
</a>
</div>
`
let childMenu = `<div class="position-relative therapist-menu new-menu">
<div class="dropdown-item-navigationTitle">
  <p class="body_text_sm-_lineheight">
    <b>Child & Teens</b>
  </p>
</div>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/039-inspiration 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">ADHD</p>
    <p class="font_p_small">
      Learn to tame the inattentive and hyperactive behaviour
    </p>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/097-autism-1 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Autism </p>
    <p class="font_p_small">
      Neurodevelopement disorder with problems in communication and behaviour.
    </p>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/081-imagination-2 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Behavioural Disorders </p>
    <p class="font_p_small">
      Characterized by patterns of disruptive and faulty behvaiour in
      children.
    </p>
  </div>
  <div class="show-on-hover card hq-card">
    <ul>
      <li class="d-flex my-2">
        <i>
          <img
            src="assets/icons/anxiety 1.png"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">Operant Defiant Disorder</p>
          <p class="font_p_small" style="font-weight:400;color:rgba(0,0,0,.8)!important">
            Frequent and reccuring patterns of anger, arugument, rebel and
            revenge.
          </p>
        </div>
      </li>
      <li class="d-flex my-2">
        <i>
          <img
          src="assets/icons/nervous 1.png"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold" style="color:rgba(0,0,0,.8)!important">Conduct Disorder</p>
          <p class="font_p_small" style="font-weight:400;color:rgba(0,0,0,.8)!important">
            Patterns of Disrputive and violent behaviour, especially violating
            norms
          </p>
        </div>
      </li>
    </ul>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/092-knowledge-1 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Intellectual Disabilities </p>
    <p class="font_p_small">
      Consult if your child shows signs of difficulty in mental abilities,
      social skills and daily activities.
    </p>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/098-confusion-1 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Identity Crisis & Career Confusion </p>
    <p class="font_p_small">
      Get clarity and Overcome a period of uncertainity and confusion.
    </p>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/violence 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Bullying</p>
    <p class="font_p_small">
      Break the chain of use of force/threat, to abuse, aggressively dominate
      or intimidate an indiviual.
    </p>
  </div>
</a>
</div>
`
let personalityMenu = `<div class="position-relative relationship-menu new-menu">
<div class="dropdown-item-navigationTitle">
  <p class="body_text_sm-_lineheight">
    <b>Personality</b>
  </p>
</div>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/021-extrovert 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Personality Disorders </p>
    <p class="font_p_small">
    Characterized by unhealthy and rigid patterns of thinking, behaving and functioning.
    </p>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="assets/icons/079-perfectionist 1.png"
      width="25"
      height="25"
    />
  </i>
  <div>
    <p class="body_text_bold">Self-esteem & Confidence </p>
    <p class="font_p_small">
    Develop and build a strong and confident personality, by letting go of inhibitions.
    </p>
  </div>
</a>
</div>
`
Array.from(lists).map((list, index) => {
  list.addEventListener('mouseenter', (event) => {
    event.target.classList.add('hover')
    console.log(this, lists)
    switch (index) {
      case 0:
        showMenu.innerHTML = clinicalMenu
        break
      case 1:
        showMenu.innerHTML = behaviorMenu
        break
      case 2:
        showMenu.innerHTML = relationshipMenu
        break
      case 3:
        showMenu.innerHTML = childMenu
        break
      case 4:
        showMenu.innerHTML = personalityMenu
        break
      default:
        break
    }
  })
  list.addEventListener('mouseleave', (event) => {
    event.target.className.match(/hover/g)
      ? event.target.classList.remove('hover')
      : null
  })
  list.addEventListener(
    'click',
    (event) => {
      event.currentTarget.classList.add('hover-active')
      removeHoverClass(index)
    },
    true
  )
})

function removeHoverClass(index) {
  Array.from(lists).map((list, elIndex) => {
    if (elIndex != index) {
      list.className.match(/hover-active/g)
        ? list.classList.remove('hover-active')
        : null
    }
  })
  // console.log(index)
}

var mySwiper = new Swiper('.swiper-wrapper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
