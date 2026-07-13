Title: Schedule
Slug: schedule
Template: page
Save_as: pages/schedule.html

<section class="schedule-page">
<p class="schedule-date">Wednesday, August 12, 2026 · MSOE, Milwaukee</p>

<!-- ============================================================
     EDITING A SESSION
     Each track cell follows this shape (theme + one block per talk):
       <div class="track-info">
         <strong>Track 1</strong>
         <p class="location">Diercks Hall - NVIDIA Auditorium</p>
         <p class="track-theme">Applied AI</p>
         <a href="/pages/speakers.html#KEY">Talk title</a>
         <p class="speaker">Speaker Name</p>
         ...repeat the <a>/<p class="speaker"> pair for a second talk...
       </div>
     KEY is the speaker's headshot filename stem (the data-speaker-id on
     their card in speakers.md, e.g. vetter, mokha). The link opens that
     speaker's modal: in place over the schedule via fetch, falling back to
     navigating to speakers.html#KEY. No extension in the key.
     For a non-linking placeholder slot, use <p class="track-note">…</p>.
     Keynote / logistics rows stay unlinked.
     If Session 3 collapses to one track in the NVIDIA Auditorium,
     delete its Track 2 cell and relabel Track 1.
     Row shades: logistics | keynote | session
     ============================================================ -->

<div class="schedule-table">

<div class="schedule-row logistics">
  <div class="schedule-time">7:30 AM</div>
  <div class="schedule-event">
    <h3>Registration &amp; Breakfast <span class="event-duration">(1 hr)</span></h3>
    <p class="location">Diercks Hall - Atrium</p>
  </div>
</div>

<div class="schedule-row keynote">
  <div class="schedule-time">8:30 AM</div>
  <div class="schedule-event">
    <h3>Keynote <span class="event-duration">(1 hr)</span></h3>
    <p class="event-subtitle">Founder. Builder. Now at the epicenter of applied AI. He opens the day with how it's really made.</p>
    <p class="keynote-status">Unveiled in later July.</p>
    <p class="location">Diercks Hall - NVIDIA Auditorium</p>
  </div>
</div>

<div class="schedule-row logistics">
  <div class="schedule-time">9:30 AM</div>
  <div class="schedule-event">
    <h3>Morning Break <span class="event-duration">(15 min)</span></h3>
    <p class="location">Diercks Hall - Atrium</p>
  </div>
</div>

<div class="schedule-row session">
  <div class="schedule-time">9:45 AM</div>
  <div class="schedule-event">
    <h3>Session 1 <span class="event-duration">(1 hr 30 min)</span></h3>
    <div class="session-tracks">
      <div class="track-info">
        <strong>Track 1</strong>
        <p class="location">Diercks Hall - NVIDIA Auditorium</p>
        <p class="track-theme">Applied AI</p>
        <a href="/pages/speakers.html#peters">Vision Transformers: An Attractive Alternative to CNNs</a>
        <p class="speaker">John G. Peters</p>
        <a href="/pages/speakers.html#mcqueen">Designing Scalable Intelligent Document Processing Platforms</a>
        <p class="speaker">Andrew McQueen</p>
      </div>
      <div class="track-info">
        <strong>Track 2</strong>
        <p class="location">Direct Supply ITC - Great Hall</p>
        <p class="track-theme">Data Engineering</p>
        <a href="/pages/speakers.html#mccune">Data Contracts in Practice: Shifting Reliability Left</a>
        <p class="speaker">Sam McCune</p>
        <a href="/pages/speakers.html#windau">Beyond the Batch: Sub-Second Analytics on Streaming Data with Apache Druid</a>
        <p class="speaker">Katie Windau</p>
      </div>
    </div>
  </div>
</div>

<div class="schedule-row logistics">
  <div class="schedule-time">11:15 AM</div>
  <div class="schedule-event">
    <h3>Lunch <span class="event-duration">(1 hr)</span></h3>
    <p class="location">Diercks Hall - Atrium</p>
  </div>
</div>

<div class="schedule-row session">
  <div class="schedule-time">12:15 PM</div>
  <div class="schedule-event">
    <h3>Session 2 <span class="event-duration">(1 hr 30 min)</span></h3>
    <div class="session-tracks">
      <div class="track-info">
        <strong>Track 1</strong>
        <p class="location">Diercks Hall - NVIDIA Auditorium</p>
        <p class="track-theme">AI in Production, Part I</p>
        <a href="/pages/speakers.html#vetter">6 Years Later: Our AI Is Still Kicking – And Here's the Messy Reality</a>
        <p class="speaker">Cameron Vetter</p>
        <a href="/pages/speakers.html#flitcroft">Hacky, Useful, Effective: How Our LLM Strategy Evolved</a>
        <p class="speaker">Jack Flitcroft</p>
      </div>
      <div class="track-info">
        <strong>Track 2</strong>
        <p class="location">Direct Supply ITC - Great Hall</p>
        <p class="track-theme">Data Engineering for IoT</p>
        <a href="/pages/speakers.html#mokha">From Raw Signals to Real-Time Insights: Building an End-to-End IoT Pipeline with Databricks Zerobus</a>
        <p class="speaker">Kirat Mokha</p>
        <a href="/pages/speakers.html#vandenbush">From Sensors to Decisions: Architecting Real-Time IoT Data Pipelines</a>
        <p class="speaker">Aiden Vandenbush</p>
      </div>
    </div>
  </div>
</div>

<div class="schedule-row logistics">
  <div class="schedule-time">1:45 PM</div>
  <div class="schedule-event">
    <h3>Afternoon Break <span class="event-duration">(30 min)</span></h3>
    <p class="event-subtitle">Award Scavenger Hunt prizes</p>
    <p class="location">Diercks Hall - Atrium</p>
  </div>
</div>

<div class="schedule-row session">
  <div class="schedule-time">2:15 PM</div>
  <div class="schedule-event">
    <h3>Session 3 <span class="event-duration">(1 hr 30 min)</span></h3>
    <div class="session-tracks">
      <div class="track-info">
        <strong>Track 1</strong>
        <p class="location">Diercks Hall - NVIDIA Auditorium</p>
        <p class="track-theme">AI in Production, Part II</p>
        <a href="/pages/speakers.html#haydin">AgentOps for Data Teams: Observability, Evals, and Control for Production AI</a>
        <p class="speaker">Brian Haydin</p>
        <a href="/pages/speakers.html#connor">Growing a Production Customer-Facing AI System</a>
        <p class="speaker">Michael Connor</p>
      </div>
      <div class="track-info">
        <strong>Track 2</strong>
        <p class="location">Direct Supply ITC - Great Hall</p>
        <p class="track-theme">Using AI Assistants</p>
        <a href="/pages/speakers.html#lembke">Directing the Machine: What Happens When You Give AI Agents Structure Instead of Hope</a>
        <p class="speaker">James Lembke</p>
        <p class="track-note">Additional talk coming soon!</p>
      </div>
    </div>
  </div>
</div>

<div class="schedule-row keynote">
  <div class="schedule-time">3:45 PM</div>
  <div class="schedule-event">
    <h3>Keynote 2 <span class="event-duration">(1 hr)</span></h3>
    <a class="keynote-speaker-link" href="/pages/speakers.html#mukerji">Raja Mukerji</a>
    <p class="event-subtitle">Founder. Builder. Decades at real-time scale. He closes the day with why it matters.</p>
    <p class="location">Diercks Hall - NVIDIA Auditorium</p>
  </div>
</div>

<div class="schedule-row logistics">
  <div class="schedule-time">5:00 PM</div>
  <div class="schedule-event">
    <h3>Appetizers, Dinner &amp; Networking <span class="event-duration">(until 8:00)</span></h3>
    <p class="location">Direct Supply ITC - Great Hall and Patio (weather permitting)</p>
  </div>
</div>

</div>
</section>
