Title: Speakers
Slug: speakers
Template: page
Save_as: pages/speakers.html

<section class="schedule-page">

<div class="speaker-section" id="session-1-track-1">
<div class="speakers-grid-full">

	<div class="speaker-card-full" data-speaker-id="flitcroft">
	<img src="/images/past-events/2026/flitcroft.jpg" alt="Headshot">
	<div class="speaker-info">
	<h4 class="speaker-title-link" role="button" tabindex="0">Hacky, Useful, Effective: How Our LLM Strategy Evolved</h4>
	<p class="speaker-name">Jack Flitcroft</p>
	<p class="speaker-role">Juno</p>
	<div class="speaker-bio" style="display:none;">
            <p>Jack is the co-founder and Head of AI at Juno, a tax technology startup building AI-native tools for tax professionals. A 2022 computer science graduate of MSOE, he got his start in healthcare tech before moving into the startup world, where he now leads the development of intelligent document understanding systems that power real-world tax workflows.</p>
    </div>
    <div class="speaker-abstract" style="display:none;">
        <p>This talk is about the evolution of using LLMs for real-world document understanding and structured extraction. Rather than focusing on a single method, it traces how our approach changed over time as model capabilities improved and new operational constraints emerged.</p>
        
        <p>We began with an OCR-first pipeline that extracted text, key-value pairs, checkboxes, and confidence scores, then used an LLM to interpret that structured output. That gave us a useful confidence signal for routing uncertain cases to human review, but it also created new problems: brittle OCR outputs and weak reasoning between extracted text and document images.</p>
        
        <p>As multimodal models improved, we shifted to using the model itself for both reading and extraction, which simplified the system and improved performance. But this also removed the confidence layer we had relied on. To recover it, we used a simple but surprisingly effective ensemble strategy: run the model multiple times with higher stochasticity and use agreement across runs as a proxy for confidence.</p>
        
        <p>The talk closes with the next open challenge: how to keep the benefits of multi-pass confidence estimation without paying for multiple calls on every document. It’s a story about how practical AI systems evolve through iteration, tradeoffs, and a few useful hacks.</p>
    </div>
	</div>
	</div>


	<div class="speaker-card-full" data-speaker-id="vetter">
	<img src="/images/past-events/2026/vetter.jpg" alt="Headshot">
	<div class="speaker-info">
	<h4 class="speaker-title-link" role="button" tabindex="1">6 Years Later: Our AI Is Still Kicking – And Here's the Messy Reality</h4>
	<p class="speaker-name">Cameron Vetter</p>
	<p class="speaker-role">New Resources Consulting</p>
	<!-- Hidden data for modal -->
        <div class="speaker-bio" style="display:none;">
            <p>Cameron Vetter is a technology professional, recognized for his exceptional contributions to the Microsoft ecosystem as a Microsoft Most Valuable Professional (MVP) in Artificial Intelligence. His MVP award, which he has earned seven years in a row, highlights his commitment to empowering developers, IT professionals, and organizations through education, mentorship, and thought leadership.</p>
            
            <p>With over two decades of experience in AI/ML, cloud architecture, and technology leadership, Cameron has established himself as a trusted expert in leveraging Microsoft technologies to drive innovation and solve complex business challenges.  Cameron specializes in areas such as Azure, .NET, DevOps, Machine Learning, and Artificial Intelligence, helping businesses harness the power of technology to achieve their goals.</p>
            
            <p>Cameron is the AI Practice Director at New Resources Consulting.  His experience spans a wide range of roles, from hands-on software engineering to strategic consulting and technical evangelism. He has worked with organizations of all sizes, from startups to Fortune 500 companies, guiding them through cloud initiatives and building AI strategies. His ability to bridge the gap between technical complexity and business value has made him a sought-after speaker, trainer, and advisor.</p>
            
            <p>In addition to his professional work, Cameron is an active contributor to the tech community. He regularly shares his insights through blog posts and open-source projects. He is a frequent speaker at industry conferences and user groups. He had presented at Microsoft Ignite, Microsoft Build, Midwest Architect Community Conference, CodeMash, That Conference, AI DevWorld, and many other user groups and conferences.</p>
        </div>
        <div class="speaker-abstract" style="display:none;">
        	<p>What happens when an AI project survives the hype cycle, funding shifts, team turnover, model drift, and six full years of production? Spoiler: it doesn't look anything like the demos from year one.</p>
        	
        	<p>In this talk, I'll share the unfiltered story of a long-running AI initiative at one of my clients, an effort that started as a promising idea in manufacturing and has quietly become a core part of daily operations. Over six years, we've retrained models a ton of times, switched models, battled bad data, outlasted CI/CD pipelines, and learned to measure ROI not in flashy metrics but in sustained, compounding business value—by enabling business scale.</p>
        	
        	<p>Expect candid war stories: the tools and architectures that aged gracefully (and the ones we had to euthanize), the technology shifts we needed to keep up with, and the small but critical tweaks that turned "it works… mostly" into "it just works."</p>
        	
        	<p>This isn't a fairy tale of effortless AI magic—it's the messy, human, practical reality of making AI stick around and deliver for years. If you're tired of one-and-done pilots and want to build something that lasts, lets have some real talk.</p>
        </div>
	</div>
	</div>

	<div class="speaker-card-full" data-speaker-id="mokha">
	<img src="/images/past-events/2026/mokha.png" alt="Headshot">
	<div class="speaker-info">
	<h4 class="speaker-title-link" role="button" tabindex="2">From Raw Signals to Real-Time Insights: Building an End-to-End IoT Pipeline with Databricks Zerobus</h4>
	<p class="speaker-name">Kirat Mokha</p>
	<p class="speaker-role">Milwaukee Tool</p>
	<!-- Hidden data for modal -->
    <div class="speaker-bio" style="display:none;">
        <p>Kirat Mokha is a Machine Learning Engineer on Milwaukee Tool’s Analytics, Algorithms, and AI Applications (AAA) team. He earned his bachelor’s in Electrical Engineering and master’s in Machine Learning from MSOE. Kirat began his career at Milwaukee Tool as an EE intern, where he helped build standardized datalogging platforms for new product development. That early exposure sparked a lasting interest in data and algorithms, eventually leading him into ML engineering. Today, his work spans MLOps, data pipelines, Databricks, and IoT systems that bring real-time engineering data into analytics and ML workflows.</p>
    </div>
    <div class="speaker-abstract" style="display:none;">
    	<p>In the world of loT, every additional hop in your data pipeline is a tax on speed, a risk to governance, and a driver of unnecessary cost. To solve this problem, we developed DataLink, an internal use wireless data collection platform that streams high fidelity data directly into Unity Catalog at near real time speeds. With Zerobus, we built an loT ingestion pipeline that delivers fast access and robust governance at a fraction of the traditional cost and complexity. This architecture transforms raw lab data from across the globe into structured insights in near real time. In this presentation, we will take a deep dive into our architectural strategy for connecting loT devices to Zerobus endpoints and setting up ingestion. We will also discuss how we leveraged alerts, dashboards, and automated failure analysis to streamline workflows for engineering teams. Finally, we will walk through a live demo showcasing the end-to-end pipeline from data generation to consumption.</p>
    </div>
	</div>
	</div>

	<div class="speaker-card-full" data-speaker-id="lembke">
	<img src="/images/past-events/2026/lembke.jpg" alt="Headshot">
	<div class="speaker-info">
	<h4 class="speaker-title-link" role="button" tabindex="3">Directing the Machine: What Happens When You Give AI Agents Structure Instead of Hope</h4>
	<p class="speaker-name">James Lembke</p>
	<p class="speaker-role">Milwaukee School of Engineering</p>
	<!-- Hidden data for modal -->
    <div class="speaker-bio" style="display:none;">
    	<p>James Lembke is an Associate Professor of Computer Science and Software Engineering at Milwaukee School of Engineering, where he teaches courses in networking, operating systems, systems programming, and web development. He holds a Ph.D. in Computer Science from Purdue University, and brings over two decades of industry experience spanning IBM, Direct Supply, and Socio Labs — working across the full software stack from OS kernel development to modern full-stack web applications. James has a growing interest in the intersection of AI and software engineering education, and is currently developing curriculum around effective human-AI collaboration for both undergraduate and graduate students. His work focuses on helping developers build structured, reliable approaches to working with AI coding agents — amplifying expertise rather than replacing judgment.</p>
    </div>
    <div class="speaker-abstract" style="display:none;">
    	<p>AI coding agents — tools like Claude Code and GitHub Copilot that autonomously read, write, and modify software through natural language — are transforming how software gets built. But without structured approaches, developers default to ad hoc interaction that produces inconsistent, unreliable results. The difference between a developer who uses AI agents effectively and one who fights them constantly often comes down to one thing: how well they communicate context and intent.</p>
    	
    	<p>This talk presents a practitioner-developed framework for directing AI coding agents, built from real project experience and now being formalized into undergraduate and graduate curriculum. Attendees will learn concrete techniques: context engineering to steer agent behavior, structured decomposition to break work into agent-friendly tasks, critical evaluation patterns for catching AI mistakes, and strategies for evolving your workflow as the tools improve. The speaker shares honest lessons from production use — including where agents still fail in surprising and non-obvious ways.</p>
    	
    	<p>The implications extend beyond software engineering. Any data professional working with AI tools faces the same core challenge: how do you direct AI to amplify your expertise rather than replace your judgment? The techniques presented are transferable to any workflow where humans and AI collaborate on complex tasks.</p>
    </div>
	</div>
	</div>

	<div class="speaker-card-full" data-speaker-id="peters">
	<img src="/images/past-events/2026/peters.jpg" alt="Headshot">
	<div class="speaker-info">
	<h4 class="speaker-title-link" role="button" tabindex="4">Vision Transformers: An Attractive Alternative to CNNs</h4>
	<p class="speaker-name">John G. Peters</p>
	<p class="speaker-role">University of Wisconsin-Madison</p>
	<!-- Hidden data for modal -->
    <div class="speaker-bio" style="display:none;">
    	<p>John Peters is a Ph.D. student in the Biomedical Data Science program at UW Madison. John's research involves using ViTs to create foundation models for scientific imaging and their applications to cellular imaging data. Through this process John has become an expert at applying various pre-trained, trained, and fine-tuned models to maximize performance on various predictive tasks. John graduated with a B.S. in Software Engineering from MSOE in Spring 2023. Through his undergraduate program, John participated in cross-disciplinary research that applied data science techniques to study genomics data sets and compare the efficacy of functional genomics sequencing techniques. </p>
    </div>
    <div class="speaker-abstract" style="display:none;">
    	<p>Vision Transformers (ViT) have become a popular alternative to Convolutional Neural Networks (CNN) for vision analysis tasks. ViTs offer a variety of benefits when compared to CNNs including higher prediction performance, greater support for multiple input resolutions, and improved robustness to out-of-distribution data. Further, similar inference costs make ViTs a drop-in replacement for many use cases. Combined with modern training paradigms such as self-supervised pretraining, ViTs can generalize extremely well to unseen data or even unseen domains.</p>
    	
    	<p>In this talk, I'll explain the key ideas behind ViTs and demonstrate how to get started training and applying your own models. As part of the talk, I'll introduce resources such as Hugging Face for accessing pretrained ViTs to reduce (or eliminate) training time and the need for large data sets. Lastly, I will show how publicly-available models can be adapted to challenging tasks in segmentation, objection detection, and classification.</p>
    </div>
	</div>
	</div>

	<div class="speaker-card-full" data-speaker-id="haydin">
	<img src="/images/past-events/2026/haydin.jpg" alt="Headshot">
	<div class="speaker-info">
	<h4 class="speaker-title-link" role="button" tabindex="5">AgentOps for Data Teams: Observability, Evals, and Control for Production AI</h4>
	<p class="speaker-name">Brian Haydin</p>
	<p class="speaker-role">Concurrency</p>
	<!-- Hidden data for modal -->
    <div class="speaker-bio" style="display:none;">
    	<p>Brian Haydin is a Solution Architect at Concurrency, where he helps organizations design and deliver practical AI, data, and Microsoft cloud solutions. He works with clients on enterprise AI strategy, Microsoft Fabric, Azure, Copilot, and agent-based application patterns, with a focus on moving beyond demos into reliable business outcomes. Brian is also active in the regional technology community and enjoys translating complex technical ideas into clear, real-world stories.</p>
    </div>
    <div class="speaker-abstract" style="display:none;">
    	<p>Many organizations can build an impressive AI demo. Far fewer can explain whether that demo still works after a prompt change, model update, tool change, policy update, or data refresh. As AI agents move from experiments into real business workflows, teams need operational patterns that look less like “prompt and pray” and more like disciplined software and data engineering.</p>
    	
    	<p>This session introduces AgentOps as a practical operating model for production AI systems. We will cover evaluation datasets, golden prompts, tracing, regression testing, human approval gates, production monitoring, and control mechanisms such as escalation paths and kill switches. The focus will be on patterns data teams and engineering teams can actually apply, especially when AI behavior depends on enterprise data, retrieval pipelines, APIs, and changing business rules.</p>
    </div>
	</div>
	</div>

	<div class="speaker-card-full" data-speaker-id="mcqueen">
	<img src="/images/past-events/2026/mcqueen.jpg" alt="Headshot">
	<div class="speaker-info">
	<h4 class="speaker-title-link" role="button" tabindex="6">Designing Scalable Intelligent Document Processing Platforms</h4>
	<p class="speaker-name">Andrew McQueen</p>
	<p class="speaker-role">Xorbix</p>
	<!-- Hidden data for modal -->
    <div class="speaker-bio" style="display:none;">
    	<p>I am a data scientist at Xorbix Technologies working primarily on custom software solutions involving various types of data. I grew up in the suburbs of Chicago with an interest in math and studied statistics, analytics, and finance at the University of Iowa. I now live in Chicago and--outside of work--enjoy reading and playing piano and video games.</p>
    </div>
    <div class="speaker-abstract" style="display:none;">
    	<p>Unstructured data remains one of the largest untapped assets and operational bottlenecks within modern enterprises. Despite meaningful investments in automation, many organizations still rely on manual and error prone processes to interpret documents, emails, and other raw text inputs. Traditional rule based approaches often fail to scale with variability, limiting both efficiency and business impact.</p>
    	<p>This session positions document processing as a strategic data and AI capability. It compares legacy approaches with modern architectures powered by large language models, retrieval augmented generation, and cloud scale data platforms. Attendees will walk through the design of an end to end intelligent document processing pipeline, from ingestion of emails and attachments to document classification, contextual data extraction, and integration into downstream enterprise systems.</p>
    	<p>The focus is on building scalable and production ready solutions that improve data quality, accelerate decision making, and unlock operational efficiency.</p>
    </div>
	</div>
	</div>

	<div class="speaker-card-full" data-speaker-id="mccune">
	<img src="/images/past-events/2026/mccune.jpg" alt="Headshot">
	<div class="speaker-info">
	<h4 class="speaker-title-link" role="button" tabindex="7">Data Contracts in Practice: Shifting Reliability Left</h4>
	<p class="speaker-name">Sam McCune</p>
	<p class="speaker-role">Xorbix</p>
	<!-- Hidden data for modal -->
    <div class="speaker-bio" style="display:none;">
    	<p>I am a Data Engineer with Xorbix Technologies Inc., with experience consulting for a large property and casualty insurance company. I primarily work with Azure Databricks and Snowflake, enabling scalable, cloud-based data solutions.</p>
    	<p>In my work, I have contributed to the design and implementation of modern data platforms, including building and optimizing ETL/ELT pipelines, developing data models to support analytics and reporting, and integrating data from a variety of internal and external sources. My projects have focused on improving data accessibility, reliability, and performance, as well as supporting advanced analytics use cases through well-structured and governed data architectures.</p>
    </div>
    <div class="speaker-abstract" style="display:none;">
    	<p>Every data team has lived the nightmare: a silent pipeline failure corrupts dashboards, breaks ML models, or delays a critical business report, and nobody notices until a stakeholder says something is wrong. Traditional monitoring catches these failures too late because data reliability is still treated as an operational concern instead of an engineering discipline designed into pipelines from the start.</p>
    	<p>This session introduces data contracts in practice, a framework for shifting reliability left by embedding schema agreements, quality guarantees, and SLA expectations directly into pipeline definitions. Rather than detecting issues downstream in dashboards or models, contracts are enforced at ingestion and transformation time, so bad data never propagates. The patterns discussed are tool-agnostic, validated in production Spark-based environments, and transferable to any modern orchestration stack.</p>
    	<p>A live demonstration shows a schema contract violation caught at ingestion, with lineage-aware alerting that immediately surfaces downstream impact in a real pipeline environment. Attendees leave with a concrete maturity model and a practical decision framework they can apply immediately to strengthen the reliability of their own data pipelines.</p>
    </div>
	</div>
	</div>

</div>
</div>

<div class="schedule-coming-soon">
<div class="coming-soon-icon">
<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<p class="coming-soon-message">We're finalizing an exciting roster of speakers for the next Data-Driven Wisconsin. Stay tuned!</p>
<p class="coming-soon-message">Interested in being a speaker?</p>
<a href="https://docs.google.com/forms/d/e/1FAIpQLSeC_i7pYNXydy4xzwpQejUJ4gDke9nzWRAA21R0urNB0XTVeg/viewform" class="btn btn-primary">Call for Talks</a>
</div>
</section>
