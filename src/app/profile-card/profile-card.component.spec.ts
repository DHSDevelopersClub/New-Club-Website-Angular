import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProfileCardComponent } from './profile-card.component';

let fakeMember = {
  name: 'Fame name',
  description: 'Bad Description',
  imgurl: 'http://example.com/image.jpg'
}

describe('ProfileCardComponent', () => {
  let component: ProfileCardComponent;
  let fixture: ComponentFixture<ProfileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardComponent);
    component = fixture.componentInstance;
    component.member = fakeMember;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the name in the h1 tag', () => {
    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement.textContent;
    expect(h1).toBe(fakeMember.name);
  });

  it('should render the description in the p tag', () => {
    const p = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(p).toBe(fakeMember.description);
  });


  it('should assign the image url to the src of the img tag', () => {
    const img = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toBe(fakeMember.imgurl);
  });

});
