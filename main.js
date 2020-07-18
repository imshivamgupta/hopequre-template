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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold">Generalised Anxiety Disorder</p>
          <p class="font_p_small" style="font-weight:400">
            State Of Arousal that is evoked by general events in day to day
            life.
          </p>
        </div>
      </li>
      <li class="d-flex my-2">
        <i>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold">Panic Disorder</p>
          <p class="font_p_small" style="font-weight:400">
            State of panic that evokes a state of breathlessness, fear and
            stress all together.
          </p>
        </div>
      </li>
      <li class="d-flex my-2">
        <i>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold">Phobias</p>
          <p class="font_p_small" style="font-weight:400">
            Struggling with Irrational fear, Get over your Phobias with us!
          </p>
        </div>
      </li>
      <li class="d-flex my-2">
        <i>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold">Social Anxiety</p>
          <p class="font_p_small" style="font-weight:400">
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      <li>Substance</li>
      <li>Alcohol</li>
      <li>Smoking</li>
      <li>Internet & Mobile, Video Games</li>
      <li>Gambling</li>
      <li>Sexual</li>
    </ul>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold">Impulse control disorders</p>
          <p class="font_p_small" style="font-weight:400">
            Inability to resist an urge to carrry out an implusive act.
          </p>
        </div>
      </li>
      <li class="d-flex my-2">
        <i>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold">Adult ADHD</p>
          <p class="font_p_small" style="font-weight:400">
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      <li>Personal</li>
      <li>Workplace</li>
      <li>Relationship</li>
    </ul>
  </div>
</a>
<a
  class="dropdown-item d-flex dropdown-item-navigationTitle position-relative"
  href="#"
>
  <i>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      <li class="d-flex my-2">
        <i>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold">Procastination</p>
          <p class="font_p_small" style="font-weight:400">
            Inability to start working due to lack of motivation.
          </p>
        </div>
      </li>
      <li class="d-flex my-2">
        <i>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold">Time Management</p>
          <p class="font_p_small" style="font-weight:400">
            Manage your time efficiently.
          </p>
        </div>
      </li>
      <li class="d-flex my-2">
        <i>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold">Self harm & Suicidal Behaviour </p>
          <p class="font_p_small" style="font-weight:400">
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold">Operant Defiant Disorder</p>
          <p class="font_p_small" style="font-weight:400">
            Frequent and reccuring patterns of anger, arugument, rebel and
            revenge.
          </p>
        </div>
      </li>
      <li class="d-flex my-2">
        <i>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
            width="25"
            height="25"
          />
        </i>
        <div class="d-flex flex-column">
          <p class="body_text_bold">Conduct Disorder</p>
          <p class="font_p_small" style="font-weight:400">
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
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
  list.addEventListener('mouseenter', () => {
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
})
