import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:animated_text_kit/animated_text_kit.dart';

class AboutSection extends StatelessWidget {
  const AboutSection({super.key});

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    return Container(
      padding: const EdgeInsets.symmetric(vertical: 48, horizontal: 16),
      child:
          isMobile
              ? _buildColumnLayout(context)
              : _buildCenteredLayout(context),
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

  /// **Tampilan Desktop (Gambar di Atas, Teks di Bawah, Teks Centered)**
  Widget _buildCenteredLayout(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        _buildImage(),
        const SizedBox(height: 24),
        _buildTextContent(context, isCentered: true),
      ],
    );
  }

  /// **Widget untuk menampilkan gambar dengan bayangan**
  Widget _buildImage() {
    return Container(
      constraints: const BoxConstraints(maxWidth: 200),
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

  /// **Widget untuk menampilkan teks dengan animasi**
  Widget _buildTextContent(BuildContext context, {bool isCentered = false}) {
    return Column(
      crossAxisAlignment:
          isCentered ? CrossAxisAlignment.center : CrossAxisAlignment.start,
      children: [
        AnimatedTextKit(
          animatedTexts: [
            TypewriterAnimatedText(
              'Hello! I\'m Ruly Octareza',
              textAlign: isCentered ? TextAlign.center : TextAlign.left,
              textStyle: TextStyle(
                fontSize: 36,
                height: 1.5,
                color: Theme.of(context).textTheme.titleLarge?.color,
              ),
              speed: const Duration(milliseconds: 100),
            ),
          ],
          repeatForever: true,
        ),
        const SizedBox(height: 16),
        SizedBox(
          child: Text(
            textAlign: TextAlign.center,
            'Hello! I\'m a passionate Flutter developer with experience in building beautiful, responsive, and functional mobile applications.'
            ' With a strong foundation in clean architecture and a keen eye for design, I create applications that not only look great but are also maintainable and scalable.',
            style: TextStyle(
              fontSize: 28,
              height: 1.5,
              color: Theme.of(context).textTheme.titleLarge?.color,
            ),
          ),
        ),
        // AnimatedTextKit(
        //   animatedTexts: [
        //     FadeAnimatedText(
        //       'Hello! I\'m a passionate Flutter developer with experience in building beautiful, responsive, and functional mobile applications.',
        //       textAlign: isCentered ? TextAlign.center : TextAlign.left,
        //       textStyle: TextStyle(
        //         fontSize: 18,
        //         height: 1.5,
        //         color: Theme.of(context).textTheme.titleLarge?.color,
        //       ),
        //     ),
        //     FadeAnimatedText(
        //       'With a strong foundation in clean architecture and a keen eye for design, I create applications that not only look great but are also maintainable and scalable.',
        //       textAlign: isCentered ? TextAlign.center : TextAlign.left,
        //       textStyle: TextStyle(
        //         fontSize: 18,
        //         height: 1.5,
        //         color: Theme.of(context).textTheme.titleLarge?.color,
        //       ),
        //     ),
        //   ],
        //   repeatForever: true,
        // ),
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
