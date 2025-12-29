import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
   standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
// menuOpen = false;

//   toggleMenu() {
//     this.menuOpen = !this.menuOpen;
//   }



  menuOpen = false;
servicesOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

toggleServices(event: Event) {
  event.preventDefault();
  this.servicesOpen = !this.servicesOpen;
}



}
