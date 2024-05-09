import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  return (
    <section id="home" className="home-section text-center">
      <div className="container">
        <h1 className="display-4 text-light mb-4">Selamat Datang di Academia</h1>
        <p className="lead text-light mb-5">Inovasi dan Kualitas untuk Perjalanan Belajar Anda</p>

        {/* Fitur-Fitur */}
        <div className="features mb-5">
          <h2 className="text-light mb-3">Mengapa Memilih Academia?</h2>
          <ul className="list-unstyled text-light">
            <li className="mb-2">Kursus berkualitas tinggi dengan teknologi terkini</li>
            <li className="mb-2">Dukungan pelanggan yang ramah dan responsif</li>
            <li className="mb-2">Garansi dan dukungan teknis yang komprehensif</li>
            <li className="mb-2">Pengiriman cepat dan aman</li>
            <li className="mb-2">Fleksibilitas dalam waktu belajar</li>
            <li className="mb-2">Peluang kerja dan magang setelah menyelesaikan kursus</li> 
            <li className="mb-2">Akses gratis ke komunitas pembelajaran dan forum diskusi</li> 
          </ul>
        </div>

        {/* Testimoni atau Ulasan */}
        <div className="testimonials mb-5">
          <h2 className="text-light mb-3">Apa Kata Mereka?</h2>
          <div className="testimonial-card p-4">
            <p className="text-light mb-0">"Belajar di Academia sungguh menyenangkan dan memberikan pemahaman yang mendalam tentang teknologi terkini."</p>
            <p className="text-light font-italic mt-2">- John Doe, Alumni</p>
          </div>
        </div>

        {/* Tautan Aksi */}
        <div className="cta-section">
          <Link to="/courses" className="btn btn-primary">Jelajahi Kursus</Link>
          <Link to="/contact-us" className="btn btn-secondary">Hubungi Kami</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
