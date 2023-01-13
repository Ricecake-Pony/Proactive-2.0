puts "Clearing Database"
User.destroy_all
Exercise.destroy_all
Tracker.destroy_all
puts "Database Cleared"

puts "Creating Users"
User.create(username: "Pablo", password: "1", full_name:"Bad Pablo!")
User.create(username: "Maria", password: "1", full_name:"Wack Maria!")
puts "Users Created"

puts "Finding Exercises"
Exercise.create(title: "Tricep Pullover", description: "Bring one arm across body and pull from wrist towards your shoulder", image: "https://media4.giphy.com/media/EMxvBrMaMoGbK/giphy.gif?cid=ecf05e47cmx3fs1mppb7tr2ik5n8uxln2zea4pytuupbakm5&rid=giphy.gif&ct=g" ,duration: "15-30 secs twice")
Exercise.create(title: "Hamstring Stretch", description: "Bring one arm touch your toes if possible", image: "https://media0.giphy.com/media/Q86hAbMVJ4uTWidqFb/200w.webp?cid=ecf05e479pmb7kap4kxtiozq3cbiykcolutnef3b2vn5o0ho&rid=200w.webp&ct=g" ,duration: "15-30 secs twice")
puts "Exercises Created"

puts "Creating Exercise trackers"
Tracker.create(exercise: Exercise.first, user: User.first, exercise_name: "The arm pull", exercise_reps: "only one :/", comment: "It was super tight!", date: "1989-10-10")
Tracker.create(exercise: Exercise.first, user: User.first, exercise_name: "The leg stretch", exercise_reps: "three", comment: "It was super lax bruh!", date: "1989-10-11")
Tracker.create(exercise: Exercise.second, user: User.second, exercise_name: "The leg stretch", exercise_reps: "two", comment: "It was challenging!", date: "2001-05-15")
puts "Trackers created!"

puts " Creating Steps for exercises"
Step.create(step_number: 1, step_text: "pull arm across body at wrist", exercise: Exercise.first)
Step.create(step_number: 2, step_text: "concentrate at bringing elbow/elbow pit close to shoulder", exercise: Exercise.first)
Step.create(step_number: 1, step_text: "Touch those toes!", exercise: Exercise.second)
puts "Steps created!"

puts "Seeding Finished"