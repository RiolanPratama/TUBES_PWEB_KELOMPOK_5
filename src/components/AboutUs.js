import React from 'react';
import './style.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-section text-center">
      <div className="container">
        <h2 className="section-title text-light">Tentang Kami</h2>
        <p className="lead text-light">
          Selamat datang di Academia, tempat di mana pengetahuan bertemu dengan inovasi!
        </p>

        <div className="content">
          <div>
            <h3>Visi Kami</h3>
            <p>
              Menjadi pusat pembelajaran online terbaik yang memperkaya pengetahuan dan keterampilan Anda.
            </p>
          </div>
          <div>
            <h3>Misi Kami</h3>
            <p>
              Memberikan pengalaman belajar yang inspiratif dan bermakna untuk setiap individu.
            </p>
          </div>
          <div>
            <h3>Nilai-nilai Kami</h3>
            <ul className="list-unstyled">
              <li><strong>Kualitas:</strong> Kami mengutamakan kualitas konten dan pembelajaran yang interaktif.</li>
              <li><strong>Keterjangkauan:</strong> Kami berkomitmen untuk memberikan akses pembelajaran yang terjangkau kepada semua orang.</li>
              <li><strong>Inovasi:</strong> Kami selalu berusaha untuk memberikan pengalaman belajar yang inovatif dan relevan dengan perkembangan teknologi.</li>
            </ul>
          </div>
        </div>

        <div className="testimonials">
          <h3>Ulasan Pengguna</h3>
          <p>"Academia adalah platform pembelajaran yang luar biasa! Saya merasa sangat terbantu dengan kursus-kursus yang ditawarkan."</p>
          <p>"Terima kasih Academia, pengalaman belajar di sini begitu menyenangkan dan informatif!"</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
