import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get_storage/get_storage.dart';
import 'package:google_fonts/google_fonts.dart';

class ThemeController extends GetxController {
  final _box = GetStorage();
  final _key = 'isDarkMode';

  // Observable boolean to track dark mode state
  final RxBool isDarkMode = false.obs;

  @override
  void onInit() {
    super.onInit();
    isDarkMode.value = _loadThemeFromBox();
    _applyTheme(isDarkMode.value);
  }

  // Load theme preference from storage
  bool _loadThemeFromBox() => _box.read(_key) ?? false;

  // Save theme preference to storage
  _saveThemeToBox(bool isDark) => _box.write(_key, isDark);

  // Toggle between light and dark themes
  void toggleTheme() {
    isDarkMode.value = !isDarkMode.value;
    _applyTheme(isDarkMode.value);
    _saveThemeToBox(isDarkMode.value);
  }

  // Apply the selected theme
  void _applyTheme(bool isDark) {
    Get.changeThemeMode(isDark ? ThemeMode.dark : ThemeMode.light);
  }

  // Get current theme mode
  ThemeMode get themeMode =>
      isDarkMode.value ? ThemeMode.dark : ThemeMode.light;
}

// Light theme data
ThemeData get lightTheme {
  return ThemeData(
    brightness: Brightness.light,
    primaryColor: Colors.blue,
    scaffoldBackgroundColor: Colors.white,
    colorScheme: ColorScheme.fromSeed(
      seedColor: Colors.blue,
      brightness: Brightness.light,
    ),
    appBarTheme: const AppBarTheme(
      backgroundColor: Colors.white,
      foregroundColor: Colors.black,
      elevation: 0,
    ),
    cardTheme: CardTheme(color: Colors.white, shadowColor: Colors.black26),
    iconTheme: const IconThemeData(color: Colors.blue),
    textTheme: TextTheme(
      titleLarge: GoogleFonts.poppins(color: Colors.black),
      bodyLarge: GoogleFonts.poppins(color: Colors.black87),
      bodyMedium: GoogleFonts.poppins(color: Colors.black87),
    ),
    useMaterial3: true,
  );
}

// Dark theme data
ThemeData get darkTheme {
  return ThemeData(
    brightness: Brightness.dark,
    primaryColor: Colors.blue,
    scaffoldBackgroundColor: const Color(0xFF121212),
    colorScheme: ColorScheme.fromSeed(
      seedColor: Colors.blue,
      brightness: Brightness.dark,
    ),
    appBarTheme: const AppBarTheme(
      backgroundColor: Color(0xFF1E1E1E),
      foregroundColor: Colors.white,
      elevation: 0,
    ),
    cardTheme: CardTheme(
      color: const Color(0xFF1E1E1E),
      shadowColor: Colors.black26,
    ),
    iconTheme: const IconThemeData(color: Colors.blue),
    textTheme: TextTheme(
      titleLarge: GoogleFonts.poppins(color: Colors.white),
      bodyLarge: GoogleFonts.poppins(color: Colors.white70),
      bodyMedium: GoogleFonts.poppins(color: Colors.white70),
    ),
    useMaterial3: true,
  );
}
