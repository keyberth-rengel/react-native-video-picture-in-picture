import AVKit
import UIKit

@objc(VideoPictureInPicture)
class VideoPictureInPicture: NSObject {
    let audioSession = AVAudioSession.sharedInstance()

    @objc(enterPictureInPictureMode)
    func enterPictureInPictureMode() {
         do {
           try audioSession.setCategory(.playback, mode: .moviePlayback)
         } catch {
           print("Failed to set audioSession category to playback")
         }
    }
}
