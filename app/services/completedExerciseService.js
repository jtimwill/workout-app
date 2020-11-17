import http from './httpService';

export function getCompletedExercise(cwid, id) {
    return http.get(`/completed_workouts/${cwid}/completed_exercises/${id}`);
};

export function deleteCompletedExercise(cwid, id) {
    return http.delete(`/completed_workouts/${cwid}/completed_exercises/${id}`);
};

export function saveCompletedExercise(completed_exercise) {
    const cwid = completed_exercise.completedWorkoutId;
    return http.post(`/completed_workouts/${cwid}/completed_exercises`, completed_exercise);
};

export function updateCompletedExercise(completed_exercise) {
    const cwid = completed_exercise.completedWorkoutId;
    const id = completed_exercise.id;
    return http.put(`/completed_workouts/${cwid}/completed_exercises/${id}`, completed_exercise);
};