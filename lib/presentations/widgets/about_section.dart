import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';

class AboutSection extends StatelessWidget {
  const AboutSection({super.key});

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    return Container(
      padding: const EdgeInsets.symmetric(vertical: 48, horizontal: 16),
      child: isMobile ? _buildColumnLayout(context) : _buildRowLayout(context),
    );
  }

  /// **Tampilan Mobile (Gambar di Atas, Teks di Bawah)**
  Widget _buildColumnLayout(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        _buildImage(),
        const SizedBox(height: 24),
        _buildTextContent(context),
      ],
    );
  }

  /// **Tampilan Desktop (Gambar di Samping)**
  Widget _buildRowLayout(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Expanded(flex: 1, child: _buildImage()),
        const SizedBox(width: 48),
        Expanded(flex: 2, child: _buildTextContent(context)),
      ],
    );
  }

  /// **Widget untuk menampilkan gambar dengan bayangan**
  Widget _buildImage() {
    return Container(
      constraints: const BoxConstraints(maxWidth: 400),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: Colors.black38,
            blurRadius: 12,
            spreadRadius: 4,
            offset: const Offset(0, 6),
          ),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: Image.asset('assets/images/pro_photo.png', fit: BoxFit.cover),
      ),
    );
  }

  /// **Widget untuk menampilkan teks**
  Widget _buildTextContent(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'About Me',
          textAlign: TextAlign.justify,
          style: TextStyle(
            fontSize: 32,
            fontWeight: FontWeight.bold,
            color: Theme.of(context).textTheme.titleLarge?.color,
          ),
        ),
        const SizedBox(height: 16),
        Text(
          textAlign: TextAlign.justify,
          'Hello! I\'m a passionate Flutter developer with experience in building beautiful, responsive, and functional mobile applications.',
          style: TextStyle(
            fontSize: 18,
            height: 1.5,
            color: Theme.of(context).textTheme.titleLarge?.color,
          ),
        ),
        const SizedBox(height: 16),
        Text(
          textAlign: TextAlign.justify,
          'With a strong foundation in clean architecture and a keen eye for design, I create applications that not only look great but are also maintainable and scalable.',
          style: TextStyle(
            fontSize: 18,
            height: 1.5,
            color: Theme.of(context).textTheme.titleLarge?.color,
          ),
        ),
        const SizedBox(height: 24),
        ElevatedButton(
          onPressed: () {},
          style: ElevatedButton.styleFrom(
            padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
          ),
          child: Text(
            'Download CV',
            style: TextStyle(
              color: Theme.of(context).textTheme.titleLarge?.color,
            ),
          ),
        ),
      ],
    );
  }
}
