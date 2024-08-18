import React from 'react'

function Home() {
  return (
    <div>
      <div>
        <img style={{ height: '600px', width: '100%' }} src="https://miro.medium.com/v2/resize:fit:1358/0*vUAhiVU0lM4WXwf_.jpg" alt="" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1 className='mt-3' style={{ color: 'rgba(231, 69, 10, 0.749)' }}> <b>Employee Management System</b></h1>
      </div>
      <div className='container'>
        <h3 style={{ color: 'rgba(231, 69, 10, 0.749)' }}> <b>Key features</b></h3>
        <ul>
          <li><b>Employee Records Management:</b> Effortlessly maintain detailed profiles of your employees, including personal information, job roles, and employment history.</li>
          <li><b>Attendance Tracking:</b> Monitor and manage employee attendance with ease, integrating time and leave tracking for accurate payroll processing.</li>
          <li><b>Performance Evaluation:</b> Conduct performance reviews and track employee progress with customizable evaluation tools.</li>
          <li><b>Payroll Management:</b> Simplify payroll processing with automated calculations, deductions, and compliance with tax regulations.</li>
          <li><b>Training and Development:</b> Track and manage employee training programs and certifications to ensure continuous professional growth.</li>
        </ul>

        <h3 style={{ color: 'rgba(231, 69, 10, 0.749)' }}> <b>Why Choose Us?</b></h3>
        <p className='mb-5' style={{textAlign:'justify'}}>Our Employee Management System is designed with user-friendly interfaces and robust features that cater to your business needs. Whether you're looking to enhance operational efficiency or improve employee satisfaction, our system provides the tools and support you need to achieve your goals. <br />

          Experience the future of workforce management with [Your Company Name]. Contact us today to learn more or request a demo!</p>
      </div>
    </div>
  )
}

export default Home