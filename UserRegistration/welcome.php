<?php
session_start();

if (!isset($_SESSION['user'])) {
    header("Location: register.html");
    exit;
}

$user = $_SESSION['user'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Welcome</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        .welcome-container {
            width: 360px;
            color: #fff;
            border-radius: 10px;
            background: transparent;
            border: 2px solid rgba(255, 255, 255, .2);
            backdrop-filter: blur(20px);
            box-shadow: 0 0 10px rgba(0, 0, 0, .2);
            padding: 20px 25px;
            text-align: center;
        }

        .avatar {
            max-width: 150px;
            margin: 15px 0;
            border-radius: 20px;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
        }

        h2 {
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 10px;
            font-weight: bold;
        }

        a.logout-btn {
            display: inline-block;
            margin-top: 15px;
            padding: 8px 20px;
            background-color: #6a0dad;
            color: white;
            text-decoration: none;
            border-radius: 20px;
            transition: background-color 0.3s ease;
        }

        a.logout-btn:hover {
            background-color: #520a85;
        }
    </style>
</head>

<body>
    <div class="welcome-container">
        <h2>Welcome, <br><?= htmlspecialchars($user['fullName']) ?>!</h2>
        <img src="<?= htmlspecialchars($user['avatar']) ?>" alt="Avatar" class="avatar">
        <p>Email: <?= htmlspecialchars($user['email']) ?></p>
        <br>
    </div>
</body>

</html>
