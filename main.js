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
let clinicalMenu = `
<div class="position-relative new-menu therapist-menu">
  <div class="dropdown-item-navigationTitle">
    <p class="body_text_sm-_lineheight">
      <b>Clinical Therapy</b>
    </p>
  </div>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Depression</p>
      <p class="font_p_small">
        An elongated feeling of sadness which decreased pleasure in favourite activities and frequent fatigue.
      </p>
    </div>
    <div class="show-on-hover card hq-card">
      <ul>
        <li>All About Depression
        </li>
        <li>Online Psychologist for Depression </li>
        <li>Are you Depressed?</li>
        <li>Seasonal Affective Disorder</li>
        <li>Post partum Disorder</li>
        <li>Self Assessment - Depression</li>
        <li>Blogs- Depression </li>
      </ul>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Anxiety</p>
      <p class="font_p_small">
        State of Arousal that occurs frequently causing racing heart and hampers ability to concentrate.
      </p>
    </div>
    <div class="show-on-hover card hq-card">
      <ul>
        <li>All About Parenting Issues
        </li>
        <li>Online Psychologist for Parenting Issues</li>
        <li>Authoritative Parenting</li>
        <li>Permissive Parenting</li>
        <li>Uninvolved Parenting</li>
        <li>Blogs - Parenting Issues </li>
      </ul>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Panic Disorder</p>
      <p class="font_p_small">
        State of panic that evokes a state of breathlessness, fear and stress all together.
      </p>
    </div>
    <div class="show-on-hover card hq-card">
      <ul>
        <li>All About Panic Disorder
        </li>
        <li>Online Psychologist For Panic Disorder</li>
        <li>Self Assessment - Panic Disorder</li>
        <li>Blogs - Panic Disorder</li>
      </ul>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Obesessive Compulsive Disorder</p>
      <p class="font_p_small">
        Thoughts that you cannot stop, repetitive behavior you keep doing again and again.
      </p>
    </div>
    <div class="show-on-hover card hq-card ">
    <ul>
      <li>All About OCD
      </li>
      <li>Online Psychologist for OCD</li>
      <li>Is your OCD real?</li>
      <li>Self Assessment - OCD</li>
      <li>Blogs- OCD</li>
    </ul>
  </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Phobias</p>
      <p class="font_p_small">
        Struggling with Irrational fear, Get over your Phobias with us!
      </p>
    </div>
    <div class="show-on-hover card hq-card left-side">
    <ul>
      <li>All About Phobia
      </li>
      <li>Online Psychologist for Phobia</li>
      <li>Self Assessment- Phobia</li>
      <li>Blogs- Phobias</li>
    </ul>
  </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Bipolar</p>
      <p class="font_p_small">
        Swinging between alternating episodes of depression and mania.
      </p>
    </div>
    <div class="show-on-hover card hq-card left-side">
    <ul>
      <li>All About Bipolar Disorder
      </li>
      <li>Online Psychologist for Bipolar Disorder</li>
      <li>Self Assessment - Bipolar Disorder</li>
      <li>Blogs- Bipolar Disorder</li>
    </ul>
  </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">PTSD</p>
      <p class="font_p_small">
        Stressful episodes that occur after a traumatic experience while hampering day to day activities.
      </p>
    </div>
    <div class="show-on-hover card hq-card left-side">
    <ul>
      <li>All About PTSD
      </li>
      <li>Online Psychologist for PTSD</li>
      <li>Self Assessment - PTSD </li>
      <li>Blogs - PTSD</li>
    </ul>
  </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Eating Disorders</p>
      <p class="font_p_small">
        Irregular eating patterns disturbing you? We can help!
      </p>
    </div>
    <div class="show-on-hover card hq-card left-side">
    <ul>
      <li>Bulimia
      </li>
      <li>Anorexia Nervosa</li>
      <li>All About Eating Disorders</li>
      <li>Online Counselling for Eating Disorders</li>
      <li>Self Assessment - Eating Disorder</li>
      <li>Blogs- Eating Disorder</li>
    </ul>
  </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Sleep Disorders</p>
      <p class="font_p_small">
        Look closely as to what is disturbing your sleep.
      </p>
    </div>
    <div class="show-on-hover card hq-card left-side">
    <ul>
      <li>Insomnia
      </li>
      <li>Sleep Hygiene</li>
      <li>All About Sleep Disorders</li>
      <li>Online Psychologist for Sleep Disorders</li>
      <li>Self Assessment - Sleep Disorder</li>
      <li>Blogs- Sleep Disorder</li>
    </ul>
  </div>
  </a>
</div>
`
let behaviorMenu = `
<div class="position-relative new-menu behaviour-menu">
  <div class="dropdown-item-navigationTitle">
    <p class="body_text_sm-_lineheight">
    <b>Behavioural Therapy</b>
    </p>
  </div>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Anger Issues</p>
      <p class="font_p_small">
        Anger Outbursts making your life difficult? We can Help!
      </p>
    </div>
    <div class="show-on-hover card hq-card">
      <ul>
        <li>Anger issues
        </li>
        <li>Anger Management Techniques</li>
        <li>Online Psychologist for handeling anger</li>
        <li>Is your Anger Hampering Your Life </li>
        <li>Self Assessment - Anger</li>
        <li>Blogs - Anger </li>
      </ul>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Addiction </p>
      <p class="font_p_small">
        Addiction is a psychological and physical inability to stop a habit .
      </p>
    </div>
    <div class="show-on-hover card hq-card">
      <ul>
        <li>All about Addiction
        </li>
        <li>Online psychologist for addiction counselling</li>
        <li>Substance Abuse </li>
        <li>Alcohol Addiction </li>
        <li>Internet Addiction </li>
        <li>Mobile Phone Addiction </li>
        <li>Video Game addiction </li>
        <li>Sexual Addiction </li>
        <li>Self Assessment - Addiction</li>
        <li>Blogs - Addiction</li>
      </ul>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Procastination</p>
      <p class="font_p_small">
        Inability to start working due to lack of motivation. We can help!
      </p>
    </div>
    <div class="show-on-hover card hq-card">
      <ul>
        <li>All About Procastination
        </li>
        <li>Online Psychologist for Procastination</li>
        <li>Self Assessment - Procastination </li>
        <li>Blogs - Procastination</li>
      </ul>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Stress</p>
      <p class="font_p_small">
        Overcome Stressful Circumstances in any Aspect of your life
      </p>
    </div>
    <div class="show-on-hover card hq-card">
      <ul>
        <li>All About Stress
        </li>
        <li>Online Psychologist for stress management</li>
        <li>Personal Stress</li>
        <li>Relationship Stress</li>
        <li>Work Place stress</li>
        <li>Self Assessment - Stress</li>
        <li>Blogs - Stress Management</li>
      </ul>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Time Management</p>
      <p class="font_p_small">
        Is Managing time a problem? Get Online Counselling!
      </p>
    </div>
    <div class="show-on-hover card hq-card left-side">
    <ul>
      <li>All About Time Management
      </li>
      <li>Online Psychologist forTime </li>
      <li>Management </li>
      <li>Self Assessment - Time Management</li>
      <li>Blogs - Time Management</li>
    </ul>
  </div>
  </a>
</div>
`
let relationshipMenu = `
<div class="position-relative new-menu relationship-menu">
  <div class="dropdown-item-navigationTitle">
    <p class="body_text_sm-_lineheight">
    <b>Relationship Issues</b>
    </p>
  </div>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Couple Therapy</p>
      <p class="font_p_small">
        Issues between partners. We can Help!
      </p>
    </div>
    <div class="show-on-hover card hq-card">
      <ul>
        <li>All About Relationship Issues
        </li>
        <li>Online Psychologist for relationship issues</li>
        <li>Break Up  </li>
        <li>Loosing someone </li>
        <li>Self Assessment - Relationship Issues</li>
        <li>Blogs - Relationship Issues</li>
      </ul>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Parenting Issues </p>
      <p class="font_p_small">
        Find out all you need to overcome the parenting struggles
      </p>
    </div>
    <div class="show-on-hover card hq-card">
      <ul>
        <li>All About Parenting Issues
        </li>
        <li>Online Psychologist for Parenting Issues</li>
        <li>Authoritative Parenting</li>
        <li>Permissive Parenting</li>
        <li>Uninvolved Parenting</li>
        <li>Blogs - Parenting Issues </li>
      </ul>
    </div>
  </a>
</div>
`
let childMenu = `
<div class="position-relative new-menu">
<div class="dropdown-item-navigationTitle">
  <p class="body_text_sm-_lineheight">
  <b>Child & Teens</b>
  </p>
</div>
<a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
  <i>
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
  </i>
  <div>
    <p class="body_text_bold">ADHD</p>
    <p class="font_p_small">
      Learn to tame the inattentive and hyperactive behaviour
    </p>
  </div>
  <div class="show-on-hover card hq-card">
      <ul>
        <li>Know All About ADHD
        </li>
        <li>Online Psychologist For ADHD</li>
        <li>Self Assessment - ADHD</li>
        <li>Blogs - ADHD</li>
      </ul>
    </div>
</a>
<a class="dropdown-item d-flex dropdown-item-navigationTitle position-relative" href="#">
  <i>
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
  </i>
  <div>
    <p class="body_text_bold">Bullying </p>
    <p class="font_p_small">
      Don’t bully and don’t be a bully
    </p>
  </div>
  <div class="show-on-hover card hq-card">
    <ul>
      <li>All About Bullying
      </li>
      <li>Bullying</li>
      <li>Cyber Bullying</li>
      <li>Self Assessment - Bullying</li>
      <li>Blogs - Bullying</li>
    </ul>
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
      default:
        break
    }
  })
})
