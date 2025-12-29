import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {

  application = {
    fullName: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    message: '',
    resumeName: ''
  };

  ngOnInit() {
    const savedData = localStorage.getItem('jobApplication');
    if (savedData) {
      this.application = JSON.parse(savedData);
    }
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.application.resumeName = file.name;
    }
  }

  submitForm() {
    if (!this.application.fullName || !this.application.email || !this.application.phone) {
      alert('Please fill all required fields');
      return;
    }

    localStorage.setItem('jobApplication', JSON.stringify(this.application));
    alert('Application Submitted Successfully!');
    console.log(this.application);
  }
}
