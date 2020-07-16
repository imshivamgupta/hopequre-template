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
<div class="position-relative new-menu">
  <div class="dropdown-item-navigationTitle">
    <p class="body_text_sm-_lineheight">
      Find the perfect solution for you and your industry
    </p>
  </div>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Depression</p>
      <p class="font_p_small">
        An elongated feeling of sadness which decreased pleasure in favourite activities and frequent fatigue.
      </p>
    </div>

  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
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
        <li>Authoritarian Parenting</li>
        <li>Permissive Parenting</li>
        <li>Uninvolved Parenting</li>
        <li>Blogs - Parenting Issues </li>
      </ul>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Panic Disorder</p>
      <p class="font_p_small">
        State of panic that evokes a state of breathlessness, fear and stress all together.
      </p>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Obesessive Compulsive Disorder</p>
      <p class="font_p_small">
        Thoughts that you cannot stop, repetitive behavior you keep doing again and again.
      </p>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Phobias</p>
      <p class="font_p_small">
        Struggling with Irrational fear, Get over your Phobias with us!
      </p>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Bipolar</p>
      <p class="font_p_small">
        Swinging between alternating episodes of depression and mania.
      </p>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">PTSD</p>
      <p class="font_p_small">
        Stressful episodes that occur after a traumatic experience while hampering day to day activities.
      </p>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Eating Disorders</p>
      <p class="font_p_small">
        Irregular eating patterns disturbing you? We can help!
      </p>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
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
let behaviorMenu = `
<div class="position-relative new-menu">
  <div class="dropdown-item-navigationTitle">
    <p class="body_text_sm-_lineheight">
      Find the perfect solution for you and your industry
    </p>
  </div>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Anger Issues</p>
      <p class="font_p_small">
        Anger Outbursts making your life difficult? We can Help!
      </p>
    </div>

  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
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
        <li>All About Parenting Issues
        </li>
        <li>Online Psychologist for Parenting Issues</li>
        <li>Authoritative Parenting</li>
        <li>Authoritarian Parenting</li>
        <li>Permissive Parenting</li>
        <li>Uninvolved Parenting</li>
        <li>Blogs - Parenting Issues </li>
      </ul>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Procastination</p>
      <p class="font_p_small">
        Inability to start working due to lack of motivation. We can help!
      </p>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Stress</p>
      <p class="font_p_small">
        Overcome Stressful Circumstances in any Aspect of your life
      </p>
    </div>
  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Time Management</p>
      <p class="font_p_small">
        Is Managing time a problem? Get Online Counselling!
      </p>
    </div>
  </a>
</div>
`
let relationshipMenu = `
<div class="position-relative new-menu">
  <div class="dropdown-item-navigationTitle">
    <p class="body_text_sm-_lineheight">
      Find the perfect solution for you and your industry
    </p>
  </div>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
    <i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
    </i>
    <div>
      <p class="body_text_bold">Couple Therapy</p>
      <p class="font_p_small">
        Issues between partners. We can Help!
      </p>
    </div>

  </a>
  <a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
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
        <li>Authoritarian Parenting</li>
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
    Find the perfect solution for you and your industry
  </p>
</div>
<a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
  <i>
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" width="25" height="25" />
  </i>
  <div>
    <p class="body_text_bold">ADHD</p>
    <p class="font_p_small">
      Learn to tame the inattentive and hyperactive behaviour
    </p>
  </div>

</a>
<a class="dropdown-item d-flex dropdown-item-navigationTitle" href="#">
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
      <li>All About Parenting Issues
      </li>
      <li>Online Psychologist for Parenting Issues</li>
      <li>Authoritative Parenting</li>
      <li>Authoritarian Parenting</li>
      <li>Permissive Parenting</li>
      <li>Uninvolved Parenting</li>
      <li>Blogs - Parenting Issues </li>
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
