puts "Clearing Database"
User.destroy_all
Exercise.destroy_all
Tracker.destroy_all
Step.destroy_all
puts "Database Cleared"

puts "Creating Users"
User.create(username: "Pablo", password: "1", full_name:"Bad Pablo!")
User.create(username: "Maria", password: "1", full_name:"Wack Maria!")
puts "Users Created"

puts "Finding Exercises"
e1 = Exercise.create(title: "Overhead Tricep Stretch", description: "Stretches your triceps", image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Triceps_Stretch.gif" ,duration: "15-30 seconds on each arm")
e2 = Exercise.create(title: "Overhead Reach", description: "Stretches your lats or back", image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Overhead_Reach.gif" ,duration: "15-30 seconds")
e3 = Exercise.create(title: "Overhead Stretch", description: "Stretches your upper back, shoulder, and roator cuff.", image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Upper_Body_Stretch.gif" ,duration: "15-30 seconds")
e4 = Exercise.create(title: "Shoulder / Chest Stretch", description: "Stretches your shoulders and chest.", image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Shoulder_Pec_Stretch.gif" ,duration: "15-30 seconds")
e5 = Exercise.create(title: "Forward Bend", description: "Stretches your upper back.", image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Forward_Stretch.gif" ,duration: "15-30 seconds")
e6 = Exercise.create(title: "Torso Rotation", description: "Stretches your lower back.", image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Torso_Stretch.gif" ,duration: "15-30 seconds")
e7 = Exercise.create(title: "Toe Touches", description: "Stretches your hamstrings.", image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Hamstring_Stretch.gif" ,duration: "15-30 seconds")
e8 = Exercise.create(title: "Upper Trap Stretch", description: "Stretches your neck and traps.", image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Upper_Trap_Stretch.gif" ,duration: "15-30 seconds")
e9 = Exercise.create(title: "Neck Rotations", description: "Stretches your traps.", image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Neck_Stretch.gif" ,duration: "15-30 seconds")
puts "Exercises Created"

puts "Creating Exercise trackers"
Tracker.create(exercise: e1, user: User.first, exercise_name: "The arm pull", exercise_reps: "only one :/", comment: "It was super tight!", date: "1989-10-10")
Tracker.create(exercise: e1, user: User.first, exercise_name: "The leg stretch", exercise_reps: "three", comment: "It was super lax bruh!", date: "1989-10-11")
Tracker.create(exercise: e2, user: User.second, exercise_name: "The leg stretch", exercise_reps: "two", comment: "It was challenging!", date: "2001-05-15")
puts "Trackers created!"

puts " Creating Steps for exercises"
Step.create(step_number: 1, step_text: "Raise your arm and bend it so that your hand reaches toward the opposite side.", exercise: e1)
Step.create(step_number: 2, step_text: "Use your other hand and pull the elbow toward your head until you feel a stretch", exercise: e1)
Step.create(step_number: 1, step_text: "Lean to one side and stretch your finger tips to the side", exercise: e2)
Step.create(step_number: 1, step_text: "Clasp hands together above the head with palms facing outward.", exercise: e3)
Step.create(step_number: 2, step_text: "Push your arms up, stretching upward.", exercise: e3)
Step.create(step_number: 1, step_text: "Clasp hands behind your back", exercise: e4)
Step.create(step_number: 2, step_text: "Push your chest out and tilt your head upwards", exercise: e4)
Step.create(step_number: 1, step_text: "Clasp your hands in front of you", exercise: e5)
Step.create(step_number: 2, step_text: "Round your back forward and lower your head to be in line with your arms", exercise: e5)
Step.create(step_number: 1, step_text: "Twist your upper body in the direction of the arm that's resting on the back of your chair", exercise: e6)
Step.create(step_number: 1, step_text: "Raise your arm and bend it so that your hand reaches toward the opposite side.", exercise: e7)
Step.create(step_number: 2, step_text: "Use your other hand and pull the elbow toward your head until you feel a stretch", exercise: e7)
Step.create(step_number: 1, step_text: "Gently pull your head toward each shoulder until you feel a light stretch", exercise: e8)
Step.create(step_number: 1, step_text: "Relax and lean your head forward, slowly roll left and right", exercise: e9)

puts "Steps created!"

puts "Seeding Finished"

# Had error: (object doesn't support #inspect) this was because I had my associations flipped in my models. 
# I had initially
# has_many :users
# has_many :trackers, through: :users