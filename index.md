---
layout: default
---

# DMSE Breakerspace

The DMSE Breakerspace is a materials exploration lab and lounge open to MIT undergraduates. Students can get trained to use desktop characterization instruments, investigate their own materials questions, document projects, and use the lounge as a place to gather, work, and recharge.

## Start Here

* New lab users: [register for a Breakerspace lab training](https://breakerspace.libcal.com/calendar?cid=19408&t=w&d=0000-00-00&cal=19408&ct=69558&inc=0).
* Returning trained users: [reserve instrument time]({{ "/reservations.html" | relative_url }}).
* Choosing an instrument: [browse instrument pages]({{ "/instruments/" | relative_url }}).
* Instructors: [explore teaching and course collaboration options]({{ "/teaching.html" | relative_url }}).
* Lounge access: [request lounge access](https://docs.google.com/forms/d/e/1FAIpQLSdcX0J_sUQmiO0j15IHSrni4rX7LMLaILCjoXQOn4QriWAoHA/viewform?usp=sf_link).
* Questions: [dmse-breakerspace@mit.edu](mailto:dmse-breakerspace@mit.edu).

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
