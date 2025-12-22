import '../../assets/css/latestnews.css'

export default function LatestNews() {
    const newsItems = [
      {
        title: "Carlos Guestrin named as new Director of the Systems AI Lab!",
        desc: "We thank Christopher Manning for being Director of the Systems and AI Lab during a period of enormous growth for AI and SAIL from 2018–2025 and today welcome Carlos Guestrin, Fortinet Founders Professor of Computer Science, as the new Director of SAIL.",
        link: "#",
      },
      {
        title:
          "Ellen Vitercik received a Schmidt Science 2024 AI2050 Early Career Fellow Award",
        desc: "",
        link: "#",
      },
      {
        title:
          "Congratulations to Carlos Guestrin for being elected to the NAE!",
        desc: "Carlos Guestrin has been elected to the National Academy of Engineering “for scalable systems and algorithms enabling the broad application of machine learning in science and industry.”",
        link: "#",
      },
      {
        title:
          "Tatsu Hashimoto and Shuran Song both received “Samsung AI Researcher of the Year” awards",
        desc: "",
        link: "#",
      },
      {
        title:
          "Congratulations to Prof. Fei-Fei Li for being awarded the 2025 Queen Elizabeth Prize for Engineering.",
        desc: "",
        link: "#",
      },
      {
        title:
          "Congratulations to Systems and AI Lab PhD student Dora Zhao for an ICML 2024 Best Paper Award!",
        desc: "",
        link: "#",
      },
      {
        title:
          "Congratulations to Chris Manning on being awarded the 2024 IEEE John von Neumann Medal!",
        desc: "Chris Manning has been awarded the 2024 IEEE John von Neumann Medal “for advances in computational representation and analysis of natural language.”",
        link: "#",
      },
    ];
  
    return (
        <section className="latest-news-section">
        <h2 className="latest-news-title">Latest News</h2>
  
        <div className="news-grid">
          {newsItems.map((item, idx) => (
            <div key={idx} className="news-card">
              <h3 className="news-title">{item.title}</h3>
              {item.desc && <p className="news-desc">{item.desc}</p>}
              <a className="news-link" href={item.link}>Read More →</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  