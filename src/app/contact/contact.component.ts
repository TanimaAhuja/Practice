import { Component, OnInit} from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  users:any;
  constructor(private userService : UserServiceService,private router: Router) {
    this.userService.getUser().subscribe((data)=>{
      this.users=data;
    });
  }

  getUserData(data1:NgForm){
    console.log(data1.value);
  const postData = {
    comments:String=data1.value.comments,
    email:String=data1.value.email,
    phone:String=data1.value.phone,
    name:String=data1.value.name
}

    this.userService.saveUser({...data1.value, id: data1.value.email}).subscribe((result)=> {console.log(result)
      console.log(data1);
      window.location.reload()
      // this.users = [...this.users, data1]
      // this.router.navigate(['/contact'])
     });
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(users => {
      this.users = users
    })
  }

}


