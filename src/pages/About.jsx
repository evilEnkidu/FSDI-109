import "./About.css";

function About() {
  return (
    <div className="about page">
      <div className="box">
        <h2>About Rocks</h2>
        <p>
          Some people consider minerals and rocks to be life forms due to their
          role in complex, self-organizing processes. This perspective comes
          from certain interpretations of life that extend beyond biological
          organisms. Minerals and rocks undergo processes such as growth,
          crystallization, and transformation over time, which some interpret as
          similar to the self-organization seen in living systems. Additionally,
          minerals play a vital role in Earth's ecosystems and the evolution of
          life, contributing to the idea that they are an integral part of the
          broader concept of life. This view often aligns with ideas in systems
          theory, Gaia theory, or deep ecology.
        </p>
      </div>
      <h3 className="invite">
        See what our clients got to say about our products!
      </h3>
      <div className="flex-container">
        <div class="container">
          <div class="testimonial-box">
            <div class="testimonial">
              <i class="fas fa-quote-right"></i>
              <span class="testimonial-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                dignissimos blanditiis similique quod quaerat et recusandae
                tempora. Animi error quaerat labore cum! Ratione veritatis culpa
                illo quo molestiae minima repudiandae.
              </span>
              <div class="testimonial-user">
                <img
                  src="https://randomuser.me/api/portraits/women/21.jpg"
                  alt="user-img"
                  class="user-img"
                />
                <div class="user-info">
                  <span class="user-name">Username</span>
                  <div class="user-job-details">
                    <span class="user-job">Job</span>
                    <div class="line"></div>
                    <span class="user-post">Post</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="testimonial-box">
            <div class="testimonial">
              <i class="fas fa-quote-right"></i>
              <span class="testimonial-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                dignissimos blanditiis similique quod quaerat et recusandae
                tempora. Animi error quaerat labore cum! Ratione veritatis culpa
                illo quo molestiae minima repudiandae.
              </span>
              <div class="testimonial-user">
                <img
                  src="https://randomuser.me/api/portraits/women/17.jpg"
                  alt="user-img"
                  class="user-img"
                />
                <div class="user-info">
                  <span class="user-name">Username</span>
                  <div class="user-job-details">
                    <span class="user-job">Job</span>
                    <div class="line"></div>
                    <span class="user-post">Post</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="testimonial-box">
            <div class="testimonial">
              <i class="fas fa-quote-right"></i>
              <span class="testimonial-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                dignissimos blanditiis similique quod quaerat et recusandae
                tempora. Animi error quaerat labore cum! Ratione veritatis culpa
                illo quo molestiae minima repudiandae.
              </span>
              <div class="testimonial-user">
                <img
                  src="https://randomuser.me/api/portraits/women/10.jpg"
                  alt="user-img"
                  class="user-img"
                />
                <div class="user-info">
                  <span class="user-name">Username</span>
                  <div class="user-job-details">
                    <span class="user-job"> Job </span>
                    <div class="line"></div>
                    <span class="user-post">Post</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
