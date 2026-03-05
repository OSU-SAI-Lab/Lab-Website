// src/components/EventsPage/eventsData.js
// Single source of truth — used by both LatestNews (cards) and ArticlePage (detail)

// ── Event 2 assets ──
import satyakiPoster from "./images/satyaki_poster.jpg";
import ashPoster from "./images/ash_poster.jpg";
import bathymetry from "./images/Bathymetry_Poster.jpg";
import ashPosterPdf from "./pdfs/Ash_Poster.pdf";


export const events = [
    
  
    {
      id: 2,
      title: "SAI Lab Students Present Research at CSE Graduate Visit Day",
      type: "Research Presentation",
      date: "March 2026",
      time: null,
      mode: "In-Person",
      location: "The Ohio State University, CSE Department",
      description:
        "SAI Lab graduate researchers Satyaki Roy Chowdry and Aswathnarayanan Radhakrishnan presented posters on satellite bathymetry and geospatial AI at CSE Graduate Visit Day.",
      link: null,
  
      author: "SAI Lab",
      body: `
        <p>
          Two graduate researchers from the Systems and AI (SAI) Lab, Satyaki Roy
          Chowdry and Aswathnarayanan Radhakrishnan, presented their work at the
          recent CSE Graduate Visit Day.
        </p>
        <p>
          Satyaki Roy Chowdry presented <em>"From Bands to Depth: Understanding
          Bathymetry Decisions on Sentinel‑2,"</em> which examines the use of
          multispectral satellite data for depth estimation and improved
          understanding of aquatic environments.
        </p>
        <p>
          Aswathnarayanan Radhakrishnan presented <em>"Mining Earth's Digital
          Strata for Geospatial AI: Bridging Data Collection, Synthesis, and
          Self‑Training for Intelligent Earth Observation,"</em> focusing on
          advancing geospatial AI through integrated data pipelines and
          self-training frameworks.
        </p>
        <p>
          Their posters reflect the SAI Lab's commitment to advancing research at
          the intersection of artificial intelligence, remote sensing, and Earth
          systems science.
        </p>
      `,
      media: [
        {
          type: "image",
          src: satyakiPoster,
          alt: "Satyaki Roy Chowdry presenting his poster on bathymetry",
          caption:
            "Satyaki Roy Chowdry presents his research on Sentinel‑2 bathymetry.",
        },
        {
          type: "image",
          src: ashPoster,
          alt: "Aswathnarayanan Radhakrishnan presenting his poster on geospatial AI",
          caption:
            "Aswathnarayanan Radhakrishnan presents his work on geospatial AI pipelines.",
        },
        {
            type: "image",
            src: bathymetry,
            alt: "From Bands to Depth: Understanding Bathymetry Decisions on Sentinel‑2",
            caption:
              "From Bands to Depth: Understanding Bathymetry Decisions on Sentinel‑2",
          },
          {
            type: "pdf",
            src: ashPosterPdf,
            alt: "Ash's Poster",
            caption: "Ash's Poster",
          },
      ],
      tags: ["Research", "Remote Sensing", "Geospatial AI", "Graduate"],
  
      members: [
        {
          name: "Satyaki Roy Chowdry",
          profileUrl: "https://engineering.osu.edu/people/chowdhury.207",
        },
        {
          name: "Aswathnarayanan Radhakrishnan",
          profileUrl: "https://www.linkedin.com/in/radhakrishnan97/",
        },
      ],
    },
    {
        id: 1,
        title:
          "ICICLE Mentors High School Students for the Presidential AI Challenge",
        type: "Outreach / Mentorship",
        date: "January 2026",
        time: null,
        mode: "In-Person",
        location: "The Ohio State University",
        description:
          "ICICLE researchers mentored high school students participating in the Presidential AI Challenge, guiding teams through problem formulation, ethical AI considerations, and solution development.",
        link: "https://icicle.osu.edu/news/2026/01/icicle-mentors-high-school-students-presidential-ai-challenge", // no external link — "Learn More" routes to the article page
    
        // Article detail fields
        author: "ICICLE Communications",
        body: `
          <p>
            Researchers from the ICICLE AI Institute at The Ohio State University
            dedicated their time and expertise to mentoring high school students
            participating in the prestigious Presidential AI Challenge. Over the
            course of several weeks, ICICLE team members guided student teams
            through the end-to-end process of formulating real-world problems,
            designing responsible AI solutions, and presenting their work to a
            panel of judges.
          </p>
          <p>
            The Presidential AI Challenge is a national competition that encourages
            young learners to explore the transformative potential of artificial
            intelligence while grappling with the ethical considerations that come
            with deploying these technologies. Students were tasked with identifying
            a problem in their community and proposing an AI-driven solution that
            balances innovation with fairness, transparency, and accountability.
          </p>
          <p>
            ICICLE mentors helped students refine their ideas, navigate data
            collection and preprocessing, and critically evaluate the societal
            impacts of their proposals. The mentorship sessions also introduced
            students to core concepts in cyberinfrastructure, giving them a
            glimpse into the large-scale computing systems that power modern AI
            research.
          </p>
          <p>
            "Working with these students was incredibly inspiring," said one of the
            ICICLE mentors. "Their creativity and eagerness to learn reminds us why
            outreach is such a vital part of our mission."
          </p>
        `,
        media: [
          {
            type: "image",
            src: "/images/articles/presidential-ai-challenge-1.jpg",
            alt: "ICICLE mentors working with high school students",
            caption: "ICICLE researchers guide student teams at Ohio State.",
          },
          {
            type: "image",
            src: "/images/articles/presidential-ai-challenge-2.jpg",
            alt: "Students presenting their AI solutions",
            caption: "Student teams present their AI-driven community solutions.",
          },
          {
            type: "pdf",
            src: "/documents/presidential-ai-challenge-overview.pdf",
            alt: "Presidential AI Challenge Overview",
            caption: "Program overview and guidelines (PDF).",
          },
        ],
        tags: ["Outreach", "Mentorship", "K-12", "AI Ethics"],
    
        members: [
          {
            name: "Mrunal Hole",
            profileUrl: "https://www.linkedin.com/in/mrunalhole/",
          },
          {
            name: "Naveen Kamath",
            profileUrl: "https://kamaths.info",
          },
          {
            name: "Rishi Makineni",
            profileUrl: "https://www.linkedin.com/in/rishikesh-makineni/",
          },
        ],
      },
  
    // Add more events here — one object serves both the card and the article page
  ];
  
  // Helper lookup for ArticlePage: find by id from the URL param
  export const getArticleById = (id) =>
    events.find((e) => e.id === Number(id));