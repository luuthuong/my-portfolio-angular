import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BaseComponentComponent } from 'src/app/shared/components/base-component.component';

@Component({
  selector: 'app-more-project',
  templateUrl: './more-project.component.html',
  styleUrls: ['./more-project.component.scss']
})
export class MoreProjectComponent extends BaseComponentComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
  redirect(route: string, event: any) {
    const id = event.target.id;
    if(id=='DEMO_LINK' || id=='GIT_LINK'){
      return
    }
    window.open(route, '_blank');
  }

}
