import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  normalMessage(obj) {
    // Show sweetalert + clean form
    Swal.fire({
      position: 'center',
      icon: obj.icon,
      html: obj.html,
      showConfirmButton: true
    });
  }

  async confirmMessage(obj) {
    let result = await Swal.fire({
      title: 'Warning!',
      text: obj.text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    })
    return result;
  }

}