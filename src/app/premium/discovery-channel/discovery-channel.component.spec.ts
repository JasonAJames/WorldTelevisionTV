import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryChannelComponent } from './discovery-channel.component';

describe('DiscoveryChannelComponent', () => {
  let component: DiscoveryChannelComponent;
  let fixture: ComponentFixture<DiscoveryChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoveryChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
