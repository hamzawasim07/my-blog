export const metadata = {
  title: "About",
  description:
    "Hamza Wasim, an Accounting and Finance student at IBA Karachi, writing about the stock market, finance and economics.",
};

export default function About() {
  return (
    <article className="article">
      <header className="article-header">
        <h1>About Me</h1>
      </header>

      <div className="prose">
        <div className="about-hero">
          <img
            className="about-photo"
            src="/images/hamza-wasim.jpg"
            alt="Hamza Wasim"
            width="640"
            height="853"
          />
          <div className="about-intro">
            <p className="about-lead">Hey, I’m Hamza Wasim!</p>
            <p>
              Welcome to my blog! I’m Hamza Wasim, an undergraduate student at
              the Institute of Business Administration (IBA), Karachi, pursuing
              a Bachelor’s degree in Accounting and Finance.
            </p>
            <p>
              I’m someone who enjoys learning, exploring new ideas, and
              understanding how the world works, particularly when it comes to
              finance, business, economics, and financial markets.
            </p>
          </div>
        </div>

        <h2>My Interest in the Stock Market</h2>
        <p>
          One of my biggest interests is the stock market. I’ve always been
          fascinated by how businesses operate, how companies create value, and
          how market movements reflect the decisions, expectations, and emotions
          of investors.
        </p>
        <p>
          Over time, I’ve developed a keen interest in stock market research,
          technical analysis, company fundamentals, and investment
          opportunities. I enjoy studying companies, analyzing market trends,
          and forming my own perspectives on the financial markets.
        </p>
        <p>
          This blog will also be a place where I share my thoughts and research
          on stocks, companies, market developments, and other finance-related
          topics.
        </p>

        <h2>Why This Blog?</h2>
        <p>
          This website was originally created as a project for my Statistical
          Inference course at IBA. I used Claude AI as a development assistant
          to help bring the website to life.
        </p>
        <p>
          However, I wanted this project to be more than just a course
          assignment. I saw it as an opportunity to create a platform where I
          could share my knowledge, document what I learn, express my opinions,
          and explore topics that genuinely interest me.
        </p>

        <h2>What You’ll Find Here</h2>
        <p>I’ll be writing about a variety of topics, including:</p>
        <ul>
          <li>
            <strong>Stock Market &amp; Investing:</strong> Stock analysis,
            company research, market trends, and investment ideas.
          </li>
          <li>
            <strong>Finance &amp; Economics:</strong> Financial concepts,
            business developments, and economic events.
          </li>
          <li>
            <strong>Learning &amp; Insights:</strong> Interesting things I
            discover through my studies and independent research.
          </li>
          <li>
            <strong>Beyond Finance:</strong> Thoughts, observations, and other
            topics that catch my curiosity.
          </li>
        </ul>

        <h2>A Continuous Learning Journey</h2>
        <p>
          I believe learning doesn’t stop in the classroom. Every new idea,
          market movement, business decision, and experience offers an
          opportunity to learn something new.
        </p>
        <p>
          Through this blog, I hope to improve my own understanding while
          sharing useful insights with others who have similar interests.
        </p>
        <p>
          I’m not here to claim that I know everything. I’m here to learn,
          explore, analyze, and share that journey along the way.
        </p>
        <p>Thanks for stopping by. I hope you find something interesting here!</p>
        <p className="about-sign">— Hamza Wasim</p>
      </div>
    </article>
  );
}
