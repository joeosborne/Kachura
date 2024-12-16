var totalWatchTime = new List<(long CourseId, long LessonDurationSeconds)>();

var completedLessons = new List<CompletedLesson>
{
    new (1, 1, 434),
    new (1, 2, 764),
    new (2, 4, 347),
    new (2, 3, 424),
    new (3, 6, 69)
};

foreach (var completedLesson in completedLessons)
{
    totalWatchTime.Add((completedLesson.CourseId, completedLesson.LessonDurationSeconds));
}

var courseWatchtime = totalWatchTime.AggregateBy(x => x.CourseId, _ => 0m,
    (seconds, item) => decimal.Add(seconds, item.LessonDurationSeconds));

foreach (var pair in courseWatchtime)
{
    Console.WriteLine($"Course id: {pair.Key}: {pair.Value} seconds");
}

foreach (var pair in completedLessons.CountBy(x => x.LessonId))
{
    Console.WriteLine($"Lesson id: {pair.Key}: {pair.Value} times");
}


record CompletedLesson(long CourseId, long LessonId, long LessonDurationSeconds);
