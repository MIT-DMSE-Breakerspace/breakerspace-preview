---
layout: default
---

# DMSE Breakerspace

The DMSE Breakerspace is a materials exploration lab and lounge open to MIT undergraduates. Students can get trained to use desktop characterization instruments, investigate their own materials questions, document projects, and use the lounge as a place to gather, work, and recharge.

## Start Here

Choose the situation that best matches what you are trying to do. You do not need to understand the lab's organization or know a specific instrument before getting started.

<div class="intent-list">
  <article class="intent-item">
    <div class="intent-prompt">
      <span class="intent-kicker">New lab user</span>
      <h3>I want to learn an instrument</h3>
    </div>
    <div class="intent-detail">
      <p>Register for hands-on training. After completing training, you can reserve and use that instrument independently.</p>
      <a class="intent-link" href="https://breakerspace.libcal.com/calendar?cid=19408&amp;t=w&amp;d=0000-00-00&amp;cal=19408&amp;ct=69558&amp;inc=0">Find a training <span aria-hidden="true">&rarr;</span></a>
    </div>
  </article>

  <article class="intent-item">
    <div class="intent-prompt">
      <span class="intent-kicker">Choosing a method</span>
      <h3>I need to find the right instrument</h3>
    </div>
    <div class="intent-detail">
      <p>Browse what each instrument can show you and find the relevant training, operating guidance, and reservation information.</p>
      <a class="intent-link" href="{{ "/instruments/" | relative_url }}">Explore instruments <span aria-hidden="true">&rarr;</span></a>
    </div>
  </article>

  <article class="intent-item">
    <div class="intent-prompt">
      <span class="intent-kicker">Trained user</span>
      <h3>I am ready to use an instrument</h3>
    </div>
    <div class="intent-detail">
      <p>Check availability and reserve time on an instrument for which you have completed training.</p>
      <a class="intent-link" href="{{ "/reservations.html" | relative_url }}">Reserve instrument time <span aria-hidden="true">&rarr;</span></a>
    </div>
  </article>

  <article class="intent-item">
    <div class="intent-prompt">
      <span class="intent-kicker">Instructor or teaching team</span>
      <h3>I want to use the lab in a subject</h3>
    </div>
    <div class="intent-detail">
      <p>Explore collaboration models ranging from a short visit to instrument training, project support, or a course-integrated activity.</p>
      <a class="intent-link" href="{{ "/teaching.html" | relative_url }}">Plan a teaching collaboration <span aria-hidden="true">&rarr;</span></a>
    </div>
  </article>

  <article class="intent-item">
    <div class="intent-prompt">
      <span class="intent-kicker">Help and troubleshooting</span>
      <h3>I have a question or an advanced project</h3>
    </div>
    <div class="intent-detail">
      <p>Find help with access, files, samples, lab practices, instrument questions, and advanced characterization work.</p>
      <a class="intent-link" href="{{ "/resources.html" | relative_url }}">Get help <span aria-hidden="true">&rarr;</span></a>
    </div>
  </article>

  <article class="intent-item">
    <div class="intent-prompt">
      <span class="intent-kicker">Lounge access</span>
      <h3>I want to use the lounge</h3>
    </div>
    <div class="intent-detail">
      <p>Learn about lounge access, hours, espresso, and the shared space available to MIT undergraduates.</p>
      <a class="intent-link" href="{{ "/lounge.html" | relative_url }}">Visit the lounge page <span aria-hidden="true">&rarr;</span></a>
    </div>
  </article>
</div>

Still not sure where to begin? Ask someone in the lab or email [dmse-breakerspace@mit.edu](mailto:dmse-breakerspace@mit.edu).

## Hours And Access

The Breakerspace lab and lounge are open 8 AM to midnight, seven days/week.

New lab users should register for training before reserving or using instruments independently. If we do not have a training available that works for you, email [dmse-breakerspace@mit.edu](mailto:dmse-breakerspace@mit.edu) and we will happily set something up.

## Upcoming Trainings

<iframe id="training-calendar" src="https://breakerspace.libcal.com/embed_calendar.php?cal_id=19408&w=750&h=600&dv=agendaWeek&st=0&we=1&hl=prev%2Cnext%20today&hc=title&hr=basicWeek%20agendaDay%2CagendaWeek%2Cmonth&hd=dddd%2C%20MMM%20D%2C%20YYYY&hw=MMMM%20D&hm=MMMM%20YYYY&cd=dddd%20M%2FD&cw=ddd%20M%2FD&cm=ddd&ta=h(%3Amm)a&td=h(%3Amm)a&tm=h(%3Amm)a&fh=08%3A00%3A00&mi=08%3A00%3A00&ma=24%3A00%3A00&ts=00%3A30%3A00&eo=1&el=0&hf=1&sp=1&c1=%23000000&c2=%23000000&c3=%23F3F3F3&c4=%23D0D0D0&c5=%23000000&audience=&cam=&cat=&tar=0&set=1" style="border: 0" width="100%" height="600" frameborder="0" scrolling="auto"></iframe>

<script>
(function () {
  var calendar = document.getElementById('training-calendar');
  if (!calendar) return;

  var calendarUrl = calendar.src;
  var refreshInterval = 15 * 60 * 1000;

  window.setInterval(function () {
    var url = new URL(calendarUrl);
    url.searchParams.set('refresh', Date.now());
    calendar.src = url.toString();
  }, refreshInterval);
})();
</script>
