import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSummaryQuestionAnswerComponent } from './quiz-summary-question-answer.component';

describe('QuizSummaryQuestionAnswerComponent', () => {
  let component: QuizSummaryQuestionAnswerComponent;
  let fixture: ComponentFixture<QuizSummaryQuestionAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizSummaryQuestionAnswerComponent]
    });
    fixture = TestBed.createComponent(QuizSummaryQuestionAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
