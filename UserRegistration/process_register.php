<?php
session_start();

$errors = [];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get and sanitize inputs
    $fullName = htmlspecialchars(trim($_POST['fullName'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $password = $_POST['password'] ?? '';
    $confirmPassword = $_POST['confirmPassword'] ?? '';
    $gender = htmlspecialchars($_POST['gender'] ?? '');
    $termsAccepted = isset($_POST['terms']);

    // Validation
    if (!$fullName || !$email || !$password || !$confirmPassword || !$gender) {
        $errors[] = "All fields are required.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email address.";
    }

    if (strlen($password) < 8) {
        $errors[] = "Password must be at least 8 characters.";
    }

    if ($password !== $confirmPassword) {
        $errors[] = "Passwords do not match.";
    }

    if (!$termsAccepted) {
        $errors[] = "You must agree to the Terms & Conditions.";
    }

    // Profile picture validation
    if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] === 0) {
        $file = $_FILES['avatar'];
        $allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        $maxSize = 2 * 1024 * 1024;

        if (!in_array($file['type'], $allowedTypes)) {
            $errors[] = "Avatar must be a JPG or PNG image.";
        }

        if ($file['size'] > $maxSize) {
            $errors[] = "Avatar must be under 2MB.";
        }
    } else {
        $errors[] = "Failed to upload avatar.";
    }

    // If errors exist, show them
    if (!empty($errors)) {
        foreach ($errors as $error) {
            echo "<p style='color:red;'>$error</p>";
        }
        echo "<a href='register.html'>Back to Registration</a>";
        exit;
    }

    // Save avatar
    $uploadDir = 'uploads/';
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }
    $fileExt = pathinfo($file['name'], PATHINFO_EXTENSION);
    $newFileName = uniqid() . '.' . $fileExt;
    $filePath = $uploadDir . $newFileName;
    move_uploaded_file($file['tmp_name'], $filePath);

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Save user to JSON
    $user = [
        'fullName' => $fullName,
        'email' => $email,
        'password' => $hashedPassword,
        'gender' => $gender,
        'avatar' => $filePath
    ];

    $jsonFile = 'users.json';
    $users = file_exists($jsonFile) ? json_decode(file_get_contents($jsonFile), true) : [];
    $users[] = $user;
    file_put_contents($jsonFile, json_encode($users, JSON_PRETTY_PRINT));

    // Set session
    $_SESSION['user'] = [
        'fullName' => $fullName,
        'email' => $email,
        'avatar' => $filePath
    ];

    header("Location: welcome.php");
    exit;
} else {
    echo "Invalid Request Method.";
}
