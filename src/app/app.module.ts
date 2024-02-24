import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizQuestionComponent } from './quiz/quiz-question/quiz-question.component';
import { QuizSummaryQuestionAnswerComponent } from './quiz/quiz-summary-question-answer/quiz-summary-question-answer.component';
import { PageMainComponent } from './page-main/page-main.component';
import { PageLinksComponent } from './page-main/page-links/page-links.component';
import { ArticleComponent } from './page-main/article/article.component';

@NgModule({
  declarations: [AppComponent, QuizComponent, QuizQuestionComponent, QuizSummaryQuestionAnswerComponent, PageMainComponent, PageLinksComponent, ArticleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
