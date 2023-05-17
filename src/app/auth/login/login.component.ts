import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  hide: boolean;

  constructor(private router: Router, public dialog: MatDialog) { 
    this.hide = true;
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    Swal.fire({
      title: '¿Que hacer si tengo problemas con la plataforma?',
      html: 'Contamos con un equipo de soporte para ayudarte a responder tus FAQ, <a href="https://www.google.com/">escríbenos</a> o puedes comunicarte via email al correo: soportefoam@foam.com.',
      confirmButtonColor: '#8CD4F5',
      confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Entendido!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  test() {
    console.log('test')
    this.router.navigateByUrl(`/dashboard`);
  }

}
