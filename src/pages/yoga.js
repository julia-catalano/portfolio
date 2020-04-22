import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import YogaImg from "../images/yoga.jpg"
import Research from '../images/research.jpg'

const Yoga = () => (
  <Layout>
    <SEO title="About Julia Catalano Yoga" />
    <div className="overall-container">
    <div className="yoga-container">
        <div className="yoga-card">
          <div className="yoga-image-container">
            <img className="yoga-image" src={YogaImg} />
          </div>
        <div className="yoga-card-content">
            <div className='yoga-card-name'>yoga</div>
            <div className="yoga-card-description">I started practicing yoga in 2008, completed my yoga certification in 2014. The love wasn't immediate - yoga slowly started to captivate me. In moments on my mat I found stillness and strength. I left classes feeling empowered and kind. So I kept going back. As my practice became more serious, I learned to take myself a little less seriously. Still prone to running into doorways and stumbling on my mat, I'm also prone to laughing about it, to finding joy and strength in the little slip ups. After all - those little slip ups are part of what make us our own little perfectly imperfect selves!
            </div>
            <div className="yoga-card-description">It's important to me that my classes be inviting and empowering, filled with strength, playful flow, and smiles. I seek to cultivate a compassionate space where students can feel free to play, challenge themselves, and take care.</div>
            <div className="yoga-card-description">After teaching actively in the Oakland community for three years, I moved to New York to pursue my graduate degree. I only teach sporadically now, but please do <a href="mailto:jcc814@nyu.edu">reach out</a> if you want to plan a special class together!
            </div>
          </div>
        </div>
      </div>
      <div className='research-container'>
      <div className="yoga-card">
        <div className="yoga-image-container">
          <img className="yoga-image" src={Research} />
        </div>
        <div className="yoga-card-content">
          <div className="yoga-card-name">research</div>
          <div className="yoga-card-description">Perhaps surprisingly, teaching yoga inspired my turn to a graduate degree in English. My previous work had centered on (mis)communication through translation. After a collective trauma in my community, I noticed that the people in my classes moved differently. I spent a bit of time researching trauma-informed yoga, but witnessing trauma's somatic impacts eventually prompted me to investigate trauma's complicated relationship with communication, both physical and verbal.</div>
          <div className="yoga-card-description">My 2019 MA thesis, "'What the Body Remembers:' Fashion, Borders, and Troubled Bodies in Elizabeth Bowen's <i>The Last September</i>" uses Bowen's work to explore emerging characteristics of trauma and the body by turning to phenomenology, border studies, and fashion theory.</div>
        </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Yoga
