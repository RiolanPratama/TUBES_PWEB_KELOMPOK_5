import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare } from '@fortawesome/free-brands-svg-icons'; 
import './style.css';

const Courses = () => {
  return (
    <section id="courses" className="courses-section text-center">
      <div className="container">
        <h2 className="section-title text-light">Daftar Kursus</h2>
        <div className="course-card">
          <FontAwesomeIcon icon={faHtml5} size="4x" className="course-icon" />
          <h3>Kursus HTML</h3>
          <p>Belajar membuat struktur website dengan HTML.</p>
          <button className="btn btn-primary">Daftar Sekarang</button>
        </div>

        <div className="course-card pt-4">
          <FontAwesomeIcon icon={faCss3Alt} size="4x" className="course-icon" />
          <h3>Kursus CSS</h3>
          <p>Menjadi ahli dalam styling website dengan CSS.</p>
          <button className="btn btn-primary">Daftar Sekarang</button>
        </div>

        <div className="course-card pt-4">
          <FontAwesomeIcon icon={faJsSquare} size="4x" className="course-icon" />
          <h3>Kursus JavaScript</h3>
          <p>Mengembangkan interaksi dinamis di website dengan JavaScript.</p>
          <button className="btn btn-primary">Daftar Sekarang</button>
        </div>

        {/* Tambahkan kursus lain di sini */}
      </div>
    </section>
  );
};

export default Courses;
