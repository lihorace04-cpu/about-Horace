class Student {
    private String firstName;
    private String lastName;
    private int testScore;
    private int labScore;

    // Constructor
    public Student(String firstName, String lastName, int testScore, int labScore) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.testScore = testScore;
        this.labScore = labScore;
    }

    // Calculate total mark: 70% test + 30% lab
    public double getTotalMark() {
        return testScore * 0.7 + labScore * 0.3;
    }

    // Get grade
    public char getGrade() {
        double mark = getTotalMark();
        if (mark >= 80) return 'A';
        else if (mark >= 70) return 'B';
        else if (mark >= 60) return 'C';
        else if (mark >= 50) return 'D';
        else return 'F';
    }

    // Display student info
    public void showInfo() {
        System.out.println(firstName + "\t" + lastName +
                "\tGrade is: " + getGrade() +
                "\tTest Score is: " + testScore +
                "\tLab Score is: " + labScore);
    }
}

public class scratch_3 {
    public static void main(String[] args) {
        Student s1 = new Student("John", "White", 80, 70);
        Student s2 = new Student("Alisa", "Brown", 70, 60);
        Student s3 = new Student("Mike", "Green", 50, 56);
        Student s4 = new Student("horace","Li",99,80);
        s1.showInfo();
        s2.showInfo();
        s3.showInfo();
        s4.showInfo();
    }
}
