import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
slides = [
    {
      image: 'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg',
      // title: 'Campus Management System',
      // subtitle: 'Smart ERP solutions for education'
    },
    {
      image: 'https://images.pexels.com/photos/7988218/pexels-photo-7988218.jpeg',
      // title: 'Software Development',
      // subtitle: 'Angular & .NET based applications'
    },
    {
      image: 'https://media.istockphoto.com/id/2238856883/photo/business-colleagues-collaborating-on-a-project-during-a-corporate-meeting.jpg?s=612x612&w=0&k=20&c=JLKHT3gNij11w4u88_eW1OTBECuLvfS7yV4Up-kCOws=',
      // title: 'Digital Transformation',
      // subtitle: 'Innovative IT services for business'
    },
    {
      image: 'https://media.istockphoto.com/id/2174434488/photo/in-a-corporate-setting-businessman-leads-a-meeting-passionately-presenting-a-business-plan-to.jpg?s=612x612&w=0&k=20&c=U8XW5GngOGwTo0T6cT9uXWxN5sXHemjJzfnShErx3Ic=',
      // title: 'Enterprise Solutions',
      // subtitle: 'Secure and scalable platforms'
    },
    {
      image: 'https://images.pexels.com/photos/6694480/pexels-photo-6694480.jpeg',
      // title: 'Cloud & Mobile Apps',
      // subtitle: 'Future-ready technology solutions'
    }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // 5 seconds
  }

  nextSlide() {
    this.currentIndex =
      (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }


  services = [
    {
      icon: 'https://media.istockphoto.com/id/861132240/photo/man-holding-pieces-of-jigsaw-puzzle-business-matching-concept-crowd-sourcing-freelancer.webp?a=1&b=1&s=612x612&w=0&k=20&c=waQVMyr8WtuYDU-uDg5VHAZGxlOS-g5pwSYAq-05itQ=',
      title: 'Temporary Staffing',
      short: 'CampusMarg provides reliable temporary and contract staffing solutions for both IT and non-IT industries.',
      full: 'the software industry, the company specializes in recruiting and placing software developers, engineers, and other IT professionals on contract basis.'
    },
    {
      icon: 'https://cdn.pixabay.com/photo/2020/07/27/10/58/expert-5442081_1280.jpg',
      title: 'Permanent Staffing(IT/Non-IT)',
      short: 'Campus Marg has a unique band name for permanent Staffing, ',
      full: 'we works closely with your hiring managers to understand and provide the best possible resource to work directly in your company.'
    },
    {
      icon: 'https://cdn.pixabay.com/photo/2023/07/04/19/43/man-8106958_1280.png',
      title: 'Permanent Recruitment',
      short: 'Campus marg is one of the most trusted permanent recruitment services providers in India. ',
      full: 'With a team of experienced and dedicated professionals, we have been able to deliver quality candidates to our clients on time. We believe in timely delivery and have always strive to meet the deadlines set by our clients. '
    },
    {
      icon: 'https://cdn.pixabay.com/photo/2016/10/21/14/30/word-cloud-1758159_1280.png',
      title: 'Recruitment Process Outsourcing (RPO)',
      short: 'CampusMarg offers Recruitment Process Outsourcing (RPO) services for corporate clients.',
      full: 'RPO is a form of business process outsourcing (BPO) where an employer outsources all or part of its recruitment process to an external service provider.'
    },
    {
      icon: 'https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481_1280.jpg',
      title: 'Contract to Hire',
      short: 'CampusMarg offers contract-to-hire services for corporate clients.',
      full: 'This service allows employers to bring in a contract employee for a specific period of time, typically between 3 to 12 months, with the option to convert the employee to a full-time employee at the end of the contract period. '
    },
    {
      icon: 'https://cdn.pixabay.com/photo/2015/09/16/09/48/programming-942487_1280.jpg',
      title: 'Train,Hire & Deploy',
      short: 'CampusMarg s freshers program is designed to help corporate companies with well-trained and ready-to-deploy fresh graduates',
      full: 'The program is a comprehensive solution that covers the entire process of training, hiring, and deploying fresh graduates.'
    },
    {
      icon: 'https://cdn.pixabay.com/photo/2017/10/10/10/10/omg-2836658_1280.jpg',
      title: 'PayRoll',
      short: 'CampusMarg  s payroll software and services are designed to meet the specific needs of Indian clients. ',
      full: 'The software is equipped with features that are tailored to Indian laws and regulations, including compliance with Indian labor laws, tax laws and regulations, and other statutory requirements.'
    },
    {
      icon: 'https://cdn.pixabay.com/photo/2020/02/04/00/03/team-4817006_1280.jpg',
      title: 'Executive Leadership Hiring',
      short: 'CampusMarg is a consulting firm that offers executive leadership hiring services to its clients. ',
      full: 'Their services include identifying and recruiting top talent for leadership positions within an organization, as well as providing guidance and support throughout the hiring process. '
    }
  ];

  selectedService: any = null;

  openPopup(service: any) {
    this.selectedService = service;
  }

  closePopup() {
    this.selectedService = null;
  }
}
