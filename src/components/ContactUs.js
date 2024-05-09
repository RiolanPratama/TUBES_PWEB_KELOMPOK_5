import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './style.css';

const ContactUs = () => {
  return (
    <section id="contact" className="contact-section text-center">
      <div className="container">
        <h2 className="section-title text-light">Hubungi Kami</h2>
        <p className="lead text-light">Jika Anda memiliki pertanyaan atau masalah, jangan ragu untuk menghubungi kami.</p>

        {/* Formulir Kontak */}
        <div className="card contact-card bg-info">
          <div className="card-body">
            <h3 className="card-title text-dark">Formulir Kontak</h3>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label text-dark">Nama</label>
                <input type="text" id="name" className="form-control" placeholder="Masukkan Nama Anda" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label text-dark">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Masukkan Email Anda" />
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label text-dark">Pesan</label>
                <textarea id="message" className="form-control" rows="5" placeholder="Tulis Pesan Anda"></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Kirim Pesan</button>
              </div>
            </form>
          </div>
        </div>

        {/* Informasi Kontak */}
        <div className="contact-info mt-5 text-light">
          <h3>Informasi Kontak</h3>
          <p><strong>Alamat:</strong> Jl. Bunga Tak Kunjung Mekar No. 291, Bekasi, Indonesia</p>
          <p><strong>Telepon:</strong> +62-895-6096-16426</p>
          <p><strong>Email:</strong> info@academia.com</p>
        </div>

        {/* Tautan Media Sosial */}
        <div className="social-media mt-5 text-light">
          <h3>Ikuti Kami</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-info me-2">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-danger">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
