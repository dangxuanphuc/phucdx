import React from 'react';

const Skill = () => {
  return (
    <section class="skills" id="skills">
      <h1 class="title">Skills</h1>
      <div class="skills__container">
        <div class="skills__detail">
          <h2 class="skills__subtitle">
            Profesional Skills
          </h2>
          <div class="skills__box">
            <div class="skills__data">
              <div class="skills__infor">
                <i class="fab fa-html5 skills__logo"></i>
                <span class="skills__name">html</span>
              </div>
              <span class="skills__percentage">85%</span>
            </div>
            <div class="skills__bar--html"></div>
          </div>
            <div class="skills__box">
              <div class="skills__data">
                <div class="skills__infor">
                  <i class="fab fa-css3-alt skills__logo"></i>
                  <span class="skills__name">css</span>
                </div>
                <span class="skills__percentage">75%</span>
              </div>
              <div class="skills__bar--css"></div>
            </div>
            <div class="skills__box">
            <div class="skills__data">
              <div class="skills__infor">
                <i class="fab fa-js-square skills__logo"></i>
                <span class="skills__name">java script</span>
              </div>
              <span class="skills__percentage">30%</span>
            </div>
            <div class="skills__bar--js"></div>
          </div>
        </div>
        <div class="skills__softskill">
            <h2 class="skills__subtitle">
                Soft Skills
            </h2>
            <div class="skills__box">
                <div class="skills__data">
                    <div class="skills__infor">
                        <i class="fas fa-star skills__logo"></i>
                        <span class="skills__name">problem-solving</span>
                    </div>
                    <span class="skills__percentage">85%</span>
                </div>
                <div class="skills__bar--html"></div>
            </div>
            <div class="skills__box">
                <div class="skills__data">
                    <div class="skills__infor">
                        <i class="fas fa-star skills__logo"></i>
                        <span class="skills__name">teamwork</span>
                    </div>
                    <span class="skills__percentage">75%</span>
                </div>
                <div class="skills__bar--css"></div>
            </div>
            <div class="skills__box">
                <div class="skills__data">
                    <div class="skills__infor">
                        <i class="fas fa-star skills__logo"></i>
                        <span class="skills__name">time management</span>
                    </div>
                    <span class="skills__percentage">30%</span>
                </div>
                <div class="skills__bar--js"></div>
            </div>
        </div>

        <div class="skills__softskill">
          <h2 class="skills__subtitle">Other Skills</h2>
          <div class="skills__box">
            <div class="skills__data">
              <div class="skills__infor">
                <i class="fas fa-star skills__logo"></i>
                <span class="skills__name">English</span>
              </div>
              <span class="skills__percentage">intermediate</span>
            </div>
            <div class="skills__bar--eng"></div>
          </div>
          <div class="skills__box">
            <div class="skills__data">
              <div class="skills__infor">
                <i class="fas fa-star skills__logo"></i>
                <span class="skills__name">office information</span>
              </div>
              <span class="skills__percentage">competently</span>
            </div>
            <div class="skills__bar--office"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill;
