import { expect, it } from "vitest";
import type { SingleChoiceQuestion } from "../src/domain/questions";
import { fixtureQuestionSet } from "../src/test/fixtures";
import { buildValidQuestionSet, words } from "../src/test/questionSetFactory";
import { measureQuestions } from "./question-set-metrics";

const baseQuestion = buildValidQuestionSet().questions[0] as SingleChoiceQuestion;

function withChoiceWords(counts: readonly [number, number, number, number]): SingleChoiceQuestion {
  const choices = baseQuestion.choices.map((choice, index) => ({ ...choice, text: words(choice.id, counts[index]) }));
  return { ...baseQuestion, choices } as unknown as SingleChoiceQuestion;
}

it("counts correct letters among single-choice questions only", () => {
  expect(measureQuestions(fixtureQuestionSet.questions).correctLetterCounts).toEqual({ a: 1, b: 0, c: 0, d: 0 });
});

it("flags a correct option only when it is strictly the longest", () => {
  const metrics = measureQuestions([withChoiceWords([20, 10, 10, 10]), withChoiceWords([20, 20, 10, 10])]);
  expect(metrics.questions.map((question) => question.correctIsLongest)).toEqual([true, false]);
});

it("reads the consideration identifier from the objective", () => {
  const mapped = { ...baseQuestion, objective: "3.2 Training models: 3.2.e hyperparameter tuning" };
  expect(measureQuestions([mapped, baseQuestion]).considerationCounts).toEqual({ "3.2.e": 1, none: 1 });
});

it("averages the middle reading loads of an even-sized set", () => {
  const metrics = measureQuestions([withChoiceWords([12, 12, 12, 12]), withChoiceWords([22, 12, 12, 12])]);
  const loads = metrics.questions.map((question) => question.readingLoad);
  expect(metrics.readingLoad.median).toBe((loads[0] + loads[1]) / 2);
});
